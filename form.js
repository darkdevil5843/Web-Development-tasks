function validateform(){  
  var pipeline=document.myform.pipeline1.value;  
  var project=document.myform.project.value;  
  var bucket=document.myform.bucket.value;  
  var input=document.myform.input.value;  
  var credential=document.myform.credential.value;  
  var run=document.myform.run.value;  

  var min=5;

if(pipeline=="" || project=="" ||bucket=="" ||input=="" ||credential=="" ||run=="")
{
  alert("Empty Value !! Enter Some Value First....");
  return false;
}

  //for pipeline
  if(pipeline.length>=5)
  {
    if(pipeline[0]=="-" || pipeline[0]=="_" || pipeline[0]=="+")
    {
      alert("Name Should not start with "+pipeline[0]);
      return false;
    }
    else{
      if(/[!@#$%^&*]/.test(pipeline))
      {
        alert("should not contain special character")
        return false;
      }
    }
  }
  else{
    alert("Minimum length of input is "+min);
    return false;
  }



  //for project
  if(project.length>=5)
  {
    if(project[0]=="-" || project[0]=="_" || project[0]=="+")
    {
      alert("Name Should not start with "+project[0]);
      return false;
    }
    else{
      if(/[!@#$%^&*]/.test(project))
      {
        alert("should not contain special character")
        return false;
      }
    }
  }
  else{
    alert("Minimum length of input is "+min);
    return false;
  }



  //for bucket

  if(bucket.length>=5)
  {
    if(bucket[0]=="-" || bucket[0]=="_" || bucket[0]=="+")
    {
      alert("Name Should not start with "+bucket[0]);
      return false;
    }
    else{
      if(/[!@#$%^&*]/.test(bucket))
      {
        alert("should not contain special character")
        return false;
      }
    }
  }
  else{
    alert("Minimum length of input is "+min);
    return false;
  }


  //for input

  if(input.length>=5)
  {
    if(input[0]=="-" || input[0]=="_" || input[0]=="+")
    {
      alert("Name Should not start with "+input[0]);
      return false;
    }
    else{
      if(/[!@#$%^&*]/.test(input))
      {
        alert("should not contain special character")
        return false;
      }
    }
  }
  else{
    alert("Minimum length of input is "+min);
    return false;
  }


  //for credential

  if(credential.length>=5)
  {
    if(credential[0]=="-" || credential[0]=="_" || credential[0]=="+")
    {
      alert("Name Should not start with "+credential[0]);
      return false;
    }
    else{
      if(/[!@#$%^&*]/.test(credential))
      {
        alert("should not contain special character")
        return false;
      }
    }
  }
  else{
    alert("Minimum length of input is "+min);
    return false;
  }

  //for run

  if(run.length>=5)
  {
    if(run[0]=="-" || run[0]=="_" || run[0]=="+")
    {
      alert("Name Should not start with "+run[0]);
      return false;
    }
    else{
      if(/[!@#$%^&*]/.test(run))
      {
        alert("should not contain special character")
        return false;
      }
    }
  }
  else{
    alert("Minimum length of input is "+min);
    return false;
  }
}