function validEmail(str) {
  //your JS code here.
	const pattern = /^[\w]+([.-][\w]+)*@[\w]+([.-][\w]+)*\.[A-Za-z]{2,3}$/;
    return pattern.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));    
