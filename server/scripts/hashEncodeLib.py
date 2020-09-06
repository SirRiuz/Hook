
import hashlib
import base64


def toHash(string : str) -> str :
    shaPassword = hashlib.sha256(string.encode()).hexdigest()
    basePassword = base64.encodebytes(shaPassword.encode('utf-8'))
    strPassword= str(basePassword).replace("'" , '')
    return strPassword.replace('\\n' , '')

def comparateHash(password='' , hashPassword='') -> bool:
    passwordEncode = toHash(password)
    return hashPassword == passwordEncode


#print(toHash('SELECT * FROM USUARIOS WHERE = 101'))
#print(comparateHash(password='SirVegas24' , hashPassword='bMjBiMTgxNDRlYWI5NGEwMDVkOGNiMWUyMTcwYjM2MzViZjkyNTIwOWI3N2Y3ZWI4NjNjNzM2Mjg0NDEwZDk5NA=='))