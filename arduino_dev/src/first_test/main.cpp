
#include <avr/io.h>
#include <util/delay.h>

int main() {
    // Set Pin 13 (PB5) as output
    DDRB |= (1 << PB5);

    while (1) {
        PORTB ^= (1 << PB5); // Toggle LED
        _delay_ms(500);
    }
}
