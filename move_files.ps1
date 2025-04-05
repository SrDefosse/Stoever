# Script para mover archivos a sus carpetas correspondientes

# 1. Mover archivos a la carpeta stoever
Move-Item -Path "src\components\ContentandCollage.jsx" -Destination "src\components\stoever\"
Move-Item -Path "src\components\Cards.jsx" -Destination "src\components\stoever\"
Move-Item -Path "src\components\WhatWeDo.jsx" -Destination "src\components\stoever\"
Move-Item -Path "src\components\OurPresence.jsx" -Destination "src\components\stoever\"
Move-Item -Path "src\components\ContactUs.jsx" -Destination "src\components\stoever\"
Move-Item -Path "src\components\aboutHero.jsx" -Destination "src\components\stoever\"
Move-Item -Path "src\components\DoubleCards.jsx" -Destination "src\components\stoever\"
Move-Item -Path "src\components\Stats.jsx" -Destination "src\components\stoever\"
Move-Item -Path "src\components\MissionVision.jsx" -Destination "src\components\stoever\"
Move-Item -Path "src\components\WhyChooseUs.jsx" -Destination "src\components\stoever\"
Move-Item -Path "src\components\Certifications.jsx" -Destination "src\components\stoever\"
Move-Item -Path "src\components\SubsidiariesSection.jsx" -Destination "src\components\stoever\"

# 2. Mover archivos a la carpeta leather
Move-Item -Path "src\components\HeroLeather.jsx" -Destination "src\components\leather\"
Move-Item -Path "src\components\LeatherMarquee.jsx" -Destination "src\components\leather\"
Move-Item -Path "src\components\LeatherFuture.jsx" -Destination "src\components\leather\"
Move-Item -Path "src\components\LeatherStats.jsx" -Destination "src\components\leather\"
Move-Item -Path "src\components\LeatherProductsBento.jsx" -Destination "src\components\leather\"
Move-Item -Path "src\components\LeatherContact.jsx" -Destination "src\components\leather\"

# 3. Mover archivos a la carpeta ui
Move-Item -Path "src\components\BlueButton.jsx" -Destination "src\components\ui\"
Move-Item -Path "src\components\BlueGlassButton.jsx" -Destination "src\components\ui\"
Move-Item -Path "src\components\WhiteButton.jsx" -Destination "src\components\ui\"
Move-Item -Path "src\components\WhiteGlassButton.jsx" -Destination "src\components\ui\"
Move-Item -Path "src\components\GreenButton.jsx" -Destination "src\components\ui\"
Move-Item -Path "src\components\GreenGlassButton.jsx" -Destination "src\components\ui\"
Move-Item -Path "src\components\YellowButton.jsx" -Destination "src\components\ui\"
Move-Item -Path "src\components\Button.jsx" -Destination "src\components\ui\"
Move-Item -Path "src\components\Button2.jsx" -Destination "src\components\ui\"
Move-Item -Path "src\components\CustomSelect.jsx" -Destination "src\components\ui\"
Move-Item -Path "src\components\Divider.jsx" -Destination "src\components\ui\"
Move-Item -Path "src\components\DropdownMenu.jsx" -Destination "src\components\ui\"
Move-Item -Path "src\components\MaxWidthWrapper.jsx" -Destination "src\components\ui\"

# 4. Mover archivos a la carpeta layout
Move-Item -Path "src\components\Navbar.jsx" -Destination "src\components\layout\"
Move-Item -Path "src\components\NavbarLeather.jsx" -Destination "src\components\layout\"
Move-Item -Path "src\components\Footer.jsx" -Destination "src\components\layout\"

Write-Host "Todos los archivos han sido movidos correctamente." 