@echo off
setlocal
cd /d "%~dp0"

set "BUNDLED_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
set "VITE_ENTRY=%~dp0node_modules\vite\bin\vite.js"

if exist "%BUNDLED_NODE%" (
  set "NODE_EXE=%BUNDLED_NODE%"
) else (
  where node >nul 2>nul
  if errorlevel 1 (
    echo [Error] Node.js was not found.
    echo Please install Node.js 20.19 or newer, then run npm install.
    pause
    exit /b 1
  )
  set "NODE_EXE=node"
)

if not exist "%VITE_ENTRY%" (
  echo [Error] Project dependencies are missing.
  echo Install Node.js with npm, then run npm install in this folder.
  pause
  exit /b 1
)

echo Starting Joanna Birthday Surprise...
echo Open this address if the browser does not open automatically:
echo http://localhost:5173/JoannaBirthdaySurprise/
echo.
echo Press Ctrl+C to stop the website.
echo.

"%NODE_EXE%" "%VITE_ENTRY%" --host 127.0.0.1 --port 5173 --open

endlocal
