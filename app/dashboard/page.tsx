import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EmployeesStats from '@/dashboard/components/employees/empoyees-stats';
import TeamsStats from '@/dashboard/components/teams/teams-stats';

export default function DashboardPage() {
  return (
    <Tabs>
      <TabsList defaultValue="employees" className="mb-4">
        <TabsTrigger value="employees">Employees stats</TabsTrigger>
        <TabsTrigger value="teams">Teams stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmployeesStats />
      </TabsContent>
      <TabsContent value="teams">
        <TeamsStats />
      </TabsContent>
    </Tabs>
  );
}
