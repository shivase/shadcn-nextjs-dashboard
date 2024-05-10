'use client';

// eslint-disable-next-line import/named
import { ColumnDef } from '@tanstack/react-table';
import Image from 'next/image';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  teamName: string;
  isTeamLeader: boolean;
  avatar?: string;
};

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'avatar',
    header: '',
    cell: ({ row }) => {
      const avatar: string = row.getValue('avatar');
      const firstName: string = row.getValue('firstName');
      const lastName: string = row.getValue('lastName');

      return (
        <Avatar>
          {!!avatar && (
            <Image height={40} width={40} src={avatar} alt={`${firstName} ${lastName} avatar`} />
          )}
          <AvatarFallback>
            {firstName[0]}
            {lastName[0]}
          </AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'teamName',
    header: 'Team',
  },
  {
    accessorKey: 'isTeamLeader',
    header: '',
    cell: ({ row }) => {
      const isTeamLeader: boolean = row.getValue('isTeamLeader');

      return isTeamLeader ? <Badge variant="success">Team leader</Badge> : '';
    },
  },
];
