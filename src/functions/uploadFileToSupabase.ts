import { supabase } from "../utils/supbase";

function sanitizeFileName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]/g, "_");
}

export async function uploadFile(file: File, bucket = "fichiers") {
  const safeName = sanitizeFileName(file.name);
  const fileName = `${Date.now()}-${safeName}`;

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) throw new Error("Upload error: " + error.message);

  const { data: publicUrl } = supabase.storage
    .from(bucket)
    .getPublicUrl(fileName);

  return {
    path: data.path,
    url: publicUrl.publicUrl,
  };
}
