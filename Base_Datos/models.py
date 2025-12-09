from django.db import models
# Create your models here.
class colaboradores(models.Model):
    id_colab = models.BigAutoField(primary_key=True)
    num_nomina = models.IntegerField(unique=True)
    nombres = models.CharField(max_length=200)
    prim_apellido = models.CharField(max_length=200)
    seg_apellido = models.CharField(max_length=200)
    nombre_com = models.CharField(max_length=200)
    extension = models.IntegerField(unique=True)
    nivel = models.CharField(max_length=200)
    puesto = models.CharField(max_length=200)

class correos(models.Model):
    id_cor = models.BigAutoField(primary_key=True)
    user_c = models.CharField(max_length=200, unique=True)
    cont_c = models.CharField(max_length=200)

class parallels(models.Model):
    id_par = models.BigAutoField(primary_key=True)
    user_p = models.CharField(max_length=200, unique=True)
    cont_p = models.CharField(max_length=200)

class scrit(models.Model):
    id_scit = models.BigAutoField(primary_key=True)
    user_s = models.CharField(max_length=200, unique=True)
    cont_s = models.CharField(max_length=200)

class cubiculos(models.Model):
    num_c = models.IntegerField(primary_key=True)
    nom_c = models.CharField(max_length=200) 
    pasillo = models.CharField(max_length=200)

class area(models.Model):
    area = models.CharField(max_length=200,primary_key=True)
    num_colabs = models.IntegerField()

class equipo(models.Model):
    id_equip = models.BigAutoField(primary_key=True)
    hostname = models.CharField(max_length=200, unique=True) 
    ip = models.CharField(max_length=200, unique=True)

class baja(models.Model):
    id_colab = models.ForeignKey(colaboradores, on_delete=models.CASCADE)
    fecha_baja = models.DateField() 

class cubiculo_colab(models.Model):
    num_c = models.ForeignKey(cubiculos, on_delete=models.CASCADE)
    id_colab = models.ForeignKey(colaboradores, on_delete=models.CASCADE)

class correos_colab(models.Model):
    id_cor = models.ForeignKey(correos, on_delete=models.CASCADE)
    id_colab = models.ForeignKey(colaboradores, on_delete=models.CASCADE)

class parallels_colab(models.Model):
    id_par = models.ForeignKey(parallels, on_delete=models.CASCADE)
    id_colab = models.ForeignKey(colaboradores, on_delete=models.CASCADE)

class scrit_colab(models.Model):
    id_scrit = models.ForeignKey(scrit, on_delete=models.CASCADE)
    id_colab = models.ForeignKey(colaboradores, on_delete=models.CASCADE)

class equipo_colab(models.Model):
    id_equip = models.ForeignKey(equipo, on_delete=models.CASCADE)
    id_colab = models.ForeignKey(colaboradores, on_delete=models.CASCADE)


