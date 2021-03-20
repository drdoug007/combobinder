# Vaadin Combo Box Binding issue

### Steps

1) Load page and press send (Value 1 is selected). ComboItem values are empty Strings
```
Received Combo: ComboItem(id=, name=)
```
2) Select Value 2 and press send - Working as expected
```
Received Combo: ComboItem(id=2, name=Value 2)
```
3) Select Value 3 and press send - Working as expected
```
Received Combo: ComboItem(id=3, name=Value 3)
```
4) Select Value 1 again and press send - Working as expected
```
Received Combo: ComboItem(id=1, name=Value 1)
```
