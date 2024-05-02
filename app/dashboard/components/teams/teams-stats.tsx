import { ListChecksIcon, PieChartIcon, StarIcon, UsersIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { teamLeaders } from './team-leaders';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import SupportTicketsResult from '@/dashboard/components/teams/support-tickets-result';
import TeamDistributionChart from '@/dashboard/components/teams/team-distribution-chart';

export default function TeamsStats() {
  const totalTeams = 8;

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total teams</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="flex gap-2">
              <UsersIcon />
              <div className="text-5xl font-bold">{totalTeams}</div>
            </div>
            <div>
              <Button asChild size="xs">
                <Link href={'/dashboard/teams'}>View All</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex justify-between text-base">
              <span>Team leader</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map((leader) => (
              <TooltipProvider key={`${leader.firstName}${leader.lastName}`}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {!!leader.avatar && (
                        <Image src={leader.avatar} alt={`${leader.firstName} ${leader.lastName}`} />
                      )}
                      <AvatarFallback>
                        {leader.firstName[0]}
                        {leader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {leader.firstName}.{leader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex justify-between text-base">
              <span>Team distribution</span>
              <PieChartIcon />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <SupportTicketsResult />
        </CardContent>
      </Card>
    </>
  );
}
