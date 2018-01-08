# ng2-select-2

Mascara para telefone que suporta 9 digitos.

## Instalação

```
npm install ng2-telefone-mask
```

## Implementação

Importe a diretiva dentro do módulo que deseja fazer uso:

```
import { TelefoneMaskModule } from "ng2-telefone-mask";
 
@NgModule({
  imports: [
    ....,
    TelefoneMaskModule
  ],
  ...
})
```

Exemplo de como deve ser usado no projeto.

``` 
<input type="text" TelefoneMask placeholder='Telefone'>
```

OBS:. esta mascara somente funciona com inputs do tipo 'text', como no exemplo acima;

Se for util pra vc, ajude doando no link abaixo:
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=772EPN8HX9EKQ)
