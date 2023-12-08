export const UserRole = {
  client: 'client',
  trainer: 'trainer',
};

export type TUserRole = typeof UserRole;
export type TUserRoleKeyValue = keyof TUserRole;
export type TUserRoleValue = TUserRole[TUserRoleKeyValue];
