@echo off
setlocal

REM Paths to includes and libs
SET INCLUDE_PATH=includes
SET LIB_PATH=libs\lib-mingw-w64

echo Compiling main.cpp...

g++ main.cpp src\glad.c ^
    -I"%INCLUDE_PATH%" ^
    -L"%LIB_PATH%" ^
    -lglfw3 -lopengl32 -lgdi32 ^
    -static -static-libgcc -static-libstdc++ -mwindows ^
    -o app.exe

IF %ERRORLEVEL% NEQ 0 (
    echo.
    echo Error while compiling!
) ELSE (
    echo.
    echo Successfully compiled!
    echo Running app.exe...
    app.exe
)

pause
