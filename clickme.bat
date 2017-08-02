@echo off 

echo Starting CooL:SLiCE Local Instance
Rem This is for starting the CooL:SLiCE local site
taskkill /F /im node.exe >nul 2>nul
cmd /C "cd Portal"
cmd /C "npm install && start chrome http://localhost:3000 && npm run start"
echo "The program has completed"

