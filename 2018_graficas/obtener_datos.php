<?php
$host = 'localhost';
$nombreBd = 'consolidado';
$usuario = 'root';
$password = '';

$conexion = new PDO("mysql:host=$host;dbname=$nombreBd", $usuario, $password);

$consulta = "SELECT `Institución_Educativa-#`, `Suma`
             FROM `2017-basico`";

$resultado = $conexion->query($consulta);
$data = $resultado->fetchAll(PDO::FETCH_ASSOC);

$labels = array_column($data, 'Institución_Educativa-#');
$values = array_column($data, 'Suma');

$data = [
  'labels' => $labels,
  'values' => $values
];

header('Content-Type: application/json');
echo json_encode($data);
?>
