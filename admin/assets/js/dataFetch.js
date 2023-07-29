const totalStudents = document.getElementById('totalStudents'),
      totalOnline =  document.getElementById('totalOnlineStudents'),
      totalOffline =  document.getElementById('totalOfflineStudents'),
      names = document.getElementById('name'),
      mode =  document.getElementById('mode'),
      mail =  document.getElementById('mail'),
      number =  document.getElementById('number');

window.onload = async () => {
    try{
        const result = await fetch('/admin/api/students', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            } 
        }).then((res) => res.json())
        console.log(result.response[0].studentData[0]);
        totalStudents.innerHTML = result.response[1].studentTotalCount+19+' Students';
        totalOnline.innerHTML = result.response[1].studentTotalCount+3+ ' Online';
        totalOffline.innerHTML = result.response[1].studentTotalCount+15+ ' Offline';
        names.innerHTML = result.response[0].studentData[0].fullName
        mode.innerHTML = result.response[0].studentData[0].courseMode;
        mail.innerHTML = result.response[0].studentData[0].email;
        number.innerHTML = result.response[0].studentData[0].phoneNumber;
    }catch(err){
        console.log(err)
    }
    
}
      