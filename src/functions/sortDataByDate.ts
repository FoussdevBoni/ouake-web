export function sortDataByDate(array: any[]) {
    return array.sort((a: any, b: any) => {
      // Convertir les dates en timestamps si nécessaire
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
  
      // Trier du plus récent au plus ancien
      return dateB - dateA;
    });
  }
  