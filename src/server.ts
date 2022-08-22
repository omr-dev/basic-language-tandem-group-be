interface IUSER{
    firstName:string;
    lastName:string;
    accessGroups:string[];
}

const user:IUSER={
    firstName:"Max",
    lastName:"Müller",
    accessGroups:['loggedInUsers', 'members']
};
console.log(user);