<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
    <title>BdIII</title>
    
    <script type='Module'src="js/firebaseAuth.js"></script>
    <script src="js/feature.js">
    </script>
</head>
<body>
    <h1>Firebase Auth</h1>

    <span>User:</span><br><br>
    <input type="text" name="" id="email" placeholder="E-mail..."><br><br>
    <span>Password:</span><br><br>
    <input type="password" name="" id="password" placeholder="Password...">
    <br>
    <p>User sing in: <span id="userSingIn">?</span></p>
    <button type="button" onclick='singInUser()' id="btnLogar">Logar</button>
    <button type="button" onclick='createUser()' id="btnCadastro">Cadastrar</button>
</body>   
</html>