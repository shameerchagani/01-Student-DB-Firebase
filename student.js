$(function () {

    let database = firebase.database();
    let rollno = document.getElementById('rollno');
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let dob = document.getElementById('dob');
    let gender = document.getElementById('gender');
    
    
    // ------------inserting data-------------------
       
        $('#btninsert').click (function (event) {
            event.preventDefault();
            
            if (rollno.value !== "" && fname.value !== "" && lname.value !== "" && dob.value !== "") {
                database.ref('student/' + rollno.value).set({
                    Roll_Number: rollno.value,
                    First_Name: fname.value,
                    Last_Name: lname.value,
                    DOB: dob.value,
                    Gender: gender.value
                });
               alert('Record Inserted Successfully');
                $('#rollno').val(Number(rollno.value) + 1);
                $('#fname').val('');
                $('#lname').val('');
                $('#dob').val('');
                $('gender').val('');
           
        } else alert('Please Enter Values');
        
    });

// ----------------------Read/Fetch Data-----------------------

        $('#btnsearch').click(function(event){
            event.preventDefault();
            
            if(rollno.value !==""){
                database.ref('student/' + rollno.value).on('value', function(snapshot){
                    $('#fname').val(snapshot.val().First_Name);
                    $('#lname').val(snapshot.val().Last_Name);
                    $('#gender').val(snapshot.val().Gender);
                    $('#dob').val(snapshot.val().DOB);
                })
            } else alert('Please Enter Roll Number to search');
        })

// ---------------------Update Data-------------------------

        $('#btnupdate').click (function (event) {
            event.preventDefault();
            
            if (fname.value !== "" && lname.value !== "" && dob.value !== "") {
                database.ref('student/' + rollno.value).update({
                    First_Name: fname.value,
                    Last_Name: lname.value,
                    DOB: dob.value,
                    Gender: gender.value
                });
                alert('Record Updated Successfully');
                $('#rollno').val('');
                $('#fname').val('');
                $('#lname').val('');
                $('#dob').val('');
                $('gender').val('');
        
        } else alert('Please Enter Values');

        });

// --------------------- Deleting Data-----------------------

        $('#btndelete').click(function(event){
            event.preventDefault();
            if(rollno.value!==""){
            database.ref('student/' + rollno.value).remove();
            alert('Data Deleted Successfully!');
                $('#rollno').val('');
                $('#fname').val('');
                $('#lname').val('');
                $('#dob').val('');
                $('gender').val('');
        } else ('Please Enter a Roll number to Delete Record!');
        })
    

});