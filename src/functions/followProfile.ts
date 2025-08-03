import { notificationsService } from "../services/notificationsService";
import usersService from "../services/usersService";
import { Notification, User } from "../utils/database";

 export const followProfile = async (profile: User , user: User | null , 
    isLoading: boolean , setIsLoading: (isLoading: boolean)=>void ) => {
      if (!profile.id || !user?.id|| isLoading) return;

    
      const alreadyFollowing = profile.followers?.includes(user.id);
    
      const updatedFollowers = alreadyFollowing
        ? (profile.followers || []).filter(followerId => followerId !== user.id)
        : [...(profile.followers || []), user.id];
    
      const updatedFolloweds = alreadyFollowing
        ? (user.followeds || []).filter(followedId => followedId !== profile.id)
        : [...(user.followeds || []), profile.id];
    
      setIsLoading(true);
    
      try {
        // 1. Update followers of the target profile
        await usersService.updateUser(profile.id, {
          ...profile,
          followers: updatedFollowers,
        });
    
        // 2. Update followeds of the logged-in user
        await usersService.updateUser(user.id, {
          ...user,
          followeds: updatedFolloweds,
        });

        const notification: Notification = {
            receiverId: profile.id,
            senderId: user.id,
            text: `${user.fullName} vous suit maintenant. Félicitation votre réseau grandit`,
            title: "Mon réseau",
            date: new Date().toISOString(),
            path: "/mynetwork",
        }

        if (!alreadyFollowing) {
          await notificationsService.createNotification(notification)  
        }
    

        

      } catch (error) {
        console.error('Failed to update follow relationship:', error);
      } finally {
        setIsLoading(false);
      }
    };