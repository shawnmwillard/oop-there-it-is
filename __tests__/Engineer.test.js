const Engineer = require('../lib/Engineer')

it('Can set a github account using constructor', ()=> {
    const expUser = 'GithubUser';
    const e = new Engineer('Eugene', 1, 'engineer@email.com', expUser);
    expect(e.github).toBe(expUser)
});
it('gets "Engineer" from getRole()', ()=>{
    const expRole = 'Engineer';
    const e = new Engineer('Eugene', 1, 'engineer@email.com', 'GithubUser');
    expect(e.getRole()).toBe(expRole) 
})

it('gets "Engineer" from getGithub()', ()=> {
    const expUser = 'GithubUser';
    const e = new Engineer('Eugene', 1, 'engineer@email.com', expUser);
    expect(e.getGitHub()).toBe(expUser)
});