# Script para actualizar importaciones en los archivos movidos

# Lista de archivos para actualizar en la carpeta stoever
$stoeverFiles = @(
    "src\components\stoever\Hero.jsx",
    "src\components\stoever\ContentandCollage.jsx",
    "src\components\stoever\Cards.jsx",
    "src\components\stoever\WhatWeDo.jsx",
    "src\components\stoever\OurPresence.jsx",
    "src\components\stoever\ContactUs.jsx",
    "src\components\stoever\aboutHero.jsx",
    "src\components\stoever\DoubleCards.jsx",
    "src\components\stoever\Stats.jsx",
    "src\components\stoever\MissionVision.jsx",
    "src\components\stoever\WhyChooseUs.jsx",
    "src\components\stoever\Certifications.jsx",
    "src\components\stoever\SubsidiariesSection.jsx"
)

# Lista de archivos para actualizar en la carpeta leather
$leatherFiles = @(
    "src\components\leather\HeroLeather.jsx",
    "src\components\leather\LeatherMarquee.jsx",
    "src\components\leather\LeatherFuture.jsx",
    "src\components\leather\LeatherStats.jsx",
    "src\components\leather\LeatherProductsBento.jsx",
    "src\components\leather\LeatherContact.jsx"
)

# Lista de archivos para actualizar en la carpeta layout
$layoutFiles = @(
    "src\components\layout\Navbar.jsx",
    "src\components\layout\NavbarLeather.jsx",
    "src\components\layout\Footer.jsx"
)

# Función para actualizar las importaciones en un archivo
function Update-Imports {
    param (
        [string]$filePath
    )

    $content = Get-Content -Path $filePath -Raw

    # Actualizar importaciones de componentes UI
    $content = $content -replace 'import (\w+) from ["'']\.\/(\w+)Button["'']', 'import $1 from "../ui/$2Button"'
    $content = $content -replace 'import (\w+) from ["'']\.\/(\w+)GlassButton["'']', 'import $1 from "../ui/$2GlassButton"'
    $content = $content -replace 'import MaxWidthWrapper from ["'']\.\/MaxWidthWrapper["'']', 'import MaxWidthWrapper from "../ui/MaxWidthWrapper"'
    $content = $content -replace 'import CustomSelect from ["'']\.\/CustomSelect["'']', 'import CustomSelect from "../ui/CustomSelect"'
    $content = $content -replace 'import Divider from ["'']\.\/Divider["'']', 'import Divider from "../ui/Divider"'
    $content = $content -replace 'import DropdownMenu from ["'']\.\/DropdownMenu["'']', 'import DropdownMenu from "../ui/DropdownMenu"'

    # Actualizar importaciones para archivos movidos a stoever
    $content = $content -replace 'import (\w+) from ["'']\.\/Hero["'']', 'import $1 from "../stoever/Hero"'
    $content = $content -replace 'import (\w+) from ["'']\.\/ContentandCollage["'']', 'import $1 from "../stoever/ContentandCollage"'
    $content = $content -replace 'import (\w+) from ["'']\.\/Cards["'']', 'import $1 from "../stoever/Cards"'
    $content = $content -replace 'import (\w+) from ["'']\.\/WhatWeDo["'']', 'import $1 from "../stoever/WhatWeDo"'
    $content = $content -replace 'import (\w+) from ["'']\.\/OurPresence["'']', 'import $1 from "../stoever/OurPresence"'
    $content = $content -replace 'import (\w+) from ["'']\.\/ContactUs["'']', 'import $1 from "../stoever/ContactUs"'
    $content = $content -replace 'import (\w+) from ["'']\.\/aboutHero["'']', 'import $1 from "../stoever/aboutHero"'
    $content = $content -replace 'import (\w+) from ["'']\.\/DoubleCards["'']', 'import $1 from "../stoever/DoubleCards"'
    $content = $content -replace 'import (\w+) from ["'']\.\/Stats["'']', 'import $1 from "../stoever/Stats"'
    $content = $content -replace 'import (\w+) from ["'']\.\/MissionVision["'']', 'import $1 from "../stoever/MissionVision"'
    $content = $content -replace 'import (\w+) from ["'']\.\/WhyChooseUs["'']', 'import $1 from "../stoever/WhyChooseUs"'
    $content = $content -replace 'import (\w+) from ["'']\.\/Certifications["'']', 'import $1 from "../stoever/Certifications"'
    $content = $content -replace 'import (\w+) from ["'']\.\/SubsidiariesSection["'']', 'import $1 from "../stoever/SubsidiariesSection"'

    # Actualizar importaciones para archivos movidos a leather
    $content = $content -replace 'import (\w+) from ["'']\.\/HeroLeather["'']', 'import $1 from "../leather/HeroLeather"'
    $content = $content -replace 'import (\w+) from ["'']\.\/LeatherMarquee["'']', 'import $1 from "../leather/LeatherMarquee"'
    $content = $content -replace 'import (\w+) from ["'']\.\/LeatherFuture["'']', 'import $1 from "../leather/LeatherFuture"'
    $content = $content -replace 'import (\w+) from ["'']\.\/LeatherStats["'']', 'import $1 from "../leather/LeatherStats"'
    $content = $content -replace 'import (\w+) from ["'']\.\/LeatherProductsBento["'']', 'import $1 from "../leather/LeatherProductsBento"'
    $content = $content -replace 'import (\w+) from ["'']\.\/LeatherContact["'']', 'import $1 from "../leather/LeatherContact"'

    # Actualizar importaciones para archivos movidos a layout
    $content = $content -replace 'import (\w+) from ["'']\.\/Navbar["'']', 'import $1 from "../layout/Navbar"'
    $content = $content -replace 'import (\w+) from ["'']\.\/NavbarLeather["'']', 'import $1 from "../layout/NavbarLeather"'
    $content = $content -replace 'import (\w+) from ["'']\.\/Footer["'']', 'import $1 from "../layout/Footer"'
    
    # Caso especial para importaciones desde componentes antiguos
    $content = $content -replace 'import (\w+) from ["'']\.\.\/components\/(\w+)["'']', 'import $1 from "../ui/$2"'
    
    # Actualizar el contenido del archivo
    Set-Content -Path $filePath -Value $content
    
    Write-Host "Actualizadas las importaciones en: $filePath"
}

# Actualizar importaciones en todos los archivos
foreach ($file in $stoeverFiles) {
    if (Test-Path $file) {
        Update-Imports -filePath $file
    } else {
        Write-Host "El archivo $file no existe"
    }
}

foreach ($file in $leatherFiles) {
    if (Test-Path $file) {
        Update-Imports -filePath $file
    } else {
        Write-Host "El archivo $file no existe"
    }
}

foreach ($file in $layoutFiles) {
    if (Test-Path $file) {
        Update-Imports -filePath $file
    } else {
        Write-Host "El archivo $file no existe"
    }
}

Write-Host "Todas las importaciones han sido actualizadas correctamente." 