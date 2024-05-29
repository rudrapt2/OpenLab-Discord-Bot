async function testing(){
    const response = await fetch("https://openlab.ece.illinois.edu/Shibboleth.sso/Session");
    const attributes = await response.json();
    console.log(attributes);
}

testing();
