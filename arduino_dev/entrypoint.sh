#!/bin/bash

# Promt Design
echo 'PS1="\[\033[0;36m\][arduino-sim] \w \$ \[\033[0m\]"' >> ~/.bashrc




# Alias to start .elf on this Arcitektur
echo 'alias runelf="simavr -m atmega328p -f 16000000"' >> ~/.bashrc



# Other needed Aliase or installations
pip3 install flask flask-cors



source ~/.bashrc


exec bash
