export const mask = {
  cpf (value: string) {
    return value
      .replace(/\D+/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
              .replace(/(-\d{2})\d+?$/, '$1')
  },

  cnpj (value: string) {
    return value
      .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
         .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{3})(\d)/, '$1/$2')
            .replace(/(\d{4})(\d)/, '$1-$2')
              .replace(/(-\d{2})\d+?$/, '$1');
  },

  phone (value: string) {
    return value
      .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
          .replace(/(\d{4})(\d)/, '$1-$2')
            .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
              .replace(/(-\d{4})\d+?$/, '$1');
  },

  phoneDDI (value: string) {
    return value
      .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '+$1 $2')
          .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{4})(\d)/, '$1-$2')
              .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
                .replace(/(-\d{4})\d+?$/, '$1');
  },

  cep (value: string) {
    return value
      .replace(/\D+/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
          .replace(/(-\d{3})\d+?$/, '$1');
  },

  pis (value: string) {
    return value
      .replace(/\D+/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
          .replace(/(\d{5})(\d)/, '$1.$2')
            .replace(/(\d{5}\.)(\d{2})(\d)/, '$1$2-$3')
              .replace(/(-\d)\d+?$/, '$1');
  },

  money (value: string) {
    const cleanValue = Number(value.replace(/\D+/g, ''));
    const options = { style: 'currency', currency: 'BRL' };
    return new Intl.NumberFormat('pt-br', options).format(cleanValue / 100);
  },

  date (value: string) {
    value = dateValidator(value);
    return value
      .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
          .replace(/(\/\d{2})(\d)/, '$1/$2')
            .replace(/(\/\d{4})\d+?$/, '$1');
  },

  dateWithDashes (value: string) {
    value = dateValidator(value);
    return value
      .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '$1-$2')
          .replace(/(-\d{2})(\d)/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1');
  },
}

function dateValidator(value: string){
  if(value.length === 1) {
    if(Number(value[value.length -1]) > 3) {
      return value.substring(0, value.length - 1);
    }
    return value;
  }
  if(value.length === 2) {
    if(Number(value[value.length -2]) === 3 && Number(value[value.length -1]) > 1) {
      return value.substring(0, value.length - 1);
    }
    return value;
  }
  if(value.length === 3) { 
    if(Number(value[value.length -1]) > 1) {
      return value.substring(0, value.length - 1);
    }
    return value;
  }
  if(value.length === 5) {
    if(Number(value[value.length -2]) === 1 && Number(value[value.length -1]) > 2) {
      return value.substring(0, value.length - 1);
    }
   }
  return value;
}