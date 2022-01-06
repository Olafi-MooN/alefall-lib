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
    return value
      .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
          .replace(/(\/\d{2})(\d)/, '$1/$2')
            .replace(/(\/\d{4})\d+?$/, '$1');
  },

  dateWithDashes (value: string) {
    return value
      .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '$1-$2')
          .replace(/(-\d{2})(\d)/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1');
  },
}