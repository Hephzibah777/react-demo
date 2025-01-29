import user from "./user.tsx"

export default interface FormContextType {
   users: user[];
   adduser: (newData: user)=>void;
   selecteduser: user | null;
   handleSelectedUser: (data:user) =>void;
   editRow: (data:user) =>void;
   deleteRow: (id:number) =>void;
}