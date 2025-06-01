# Chip-Konfiguration
MCU         = atmega328p
F_CPU       = 16000000UL

# Toolchain
CXX         = avr-g++
OBJCOPY     = avr-objcopy
CXXFLAGS    = -Wall -Wextra -Werror -Os -mmcu=$(MCU) -DF_CPU=$(F_CPU) -std=c++17
LDFLAGS     = -mmcu=$(MCU)

# Dateinamen
NAME        = arduino_program
SRC         = main.cpp
OBJ         = $(SRC:.cpp=.o)
ELF         = $(NAME).elf
HEX         = $(NAME).hex

# Farben (optional)
RED         = \033[0;31m
GREEN       = \033[0;32m
CYAN        = \033[0;36m
RESET       = \033[0m

# Standardziel
all: $(HEX)

$(ELF): $(OBJ)
	@echo "$(GREEN)Linking ELF...$(RESET)"
	$(CXX) $(LDFLAGS) $^ -o $@

$(HEX): $(ELF)
	@echo "$(GREEN)Creating HEX...$(RESET)"
	$(OBJCOPY) -O ihex -R .eeprom $< $@

%.o: %.cpp
	@echo "$(CYAN)Compiling $<...$(RESET)"
	$(CXX) $(CXXFLAGS) -c $< -o $@

clean:
	@echo "$(RED)Cleaning...$(RESET)"
	rm -f $(OBJ) $(ELF) $(HEX)

fclean: clean

re: fclean all

.PHONY: all clean fclean re
