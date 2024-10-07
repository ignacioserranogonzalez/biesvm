@echo off
set JAVA_VERSION=jdk-17
set JAVA_HOME="C:\Program Files\Java\%JAVA_VERSION%"
set PATH=%JAVA_HOME%\bin;%PATH%
set ANTLR4_HOME=lib\antlr-4.13.1-complete.jar
set GRAMMAR=grammar\basm.g4
REM
rmdir /S /Q parser\grammar
java -jar %ANTLR4_HOME% -no-listener -visitor -o parser -Dlanguage=JavaScript %GRAMMAR%