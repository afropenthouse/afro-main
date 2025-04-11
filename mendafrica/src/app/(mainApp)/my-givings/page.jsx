import Tabs from "@/components/givings-tab/TabComponent";
import UserProfile from "@/components/profile/Profile";
import Navbar from "@/components/navbar/minorNav/Navbar";
import { getUserDonations } from "@/actions/project";
import { currentServerUser } from "@/lib/serverAuthState";
import { getOngoingProjects } from "@/actions/project";
import { getUserGoals, hasUserSetGoals } from "@/actions/user";
import { getGoalProgress } from "@/actions/user";
import GoalProgress from "@/components/modals/goalProgress/GoalProgress";
import NewProfile from "@/components/new-profile/NewProfile";
import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";

async function page() {
  const user = await currentServerUser();
  const hasGoals = await hasUserSetGoals(user.id);
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["ongoingProjects"],
    queryFn: async () => {
      const result = await getOngoingProjects();
      if (result.error) {
        throw new Error(result.error);
      }
      return result.data;
    },
  });
  await queryClient.prefetchQuery({
    queryKey: ["userDonationStats"],
    queryFn: async () => {
      const result = await getUserDonations(user.id);
      if (result.error) {
        throw new Error(result.error);
      }
      return result;
    },
  });
  await queryClient.prefetchQuery({
    queryKey: ["userGoals"],
    queryFn: async () => {
      const result = await getUserGoals(user.id);
      if (result.error) {
        throw new Error(result.error);
      }
      return result;
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ["goalProgress"],
    queryFn: async () => {
      const result = await getGoalProgress(user.id);
      if (result.error) {
        throw new Error(result.error);
      }
      return result.data;
    },
  });
  return (
    <div>
      <Navbar />
      <HydrationBoundary state={dehydrate(queryClient)}>
        {/* <UserProfile
          user={user}
          hasGoals={hasGoals}
        /> */}
        <NewProfile user={user} hasGoals={hasGoals} />
        <Tabs />
        <GoalProgress />
      </HydrationBoundary>
    </div>
  );
}

export default page;
