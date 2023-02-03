export const Arabic: any = {
  ar: 'العربية',
  en: 'الانجليزية',
};

export const English: any = {
  ar: 'Arabic',
  en: 'English',
};

export const Order: any = {
  DELIVERED: 'تم تسليم الأوردر',
  DELIVERED_TO_SENDER: 'تم إرجاعه',
};

export const ShipmentState: any = {
  DELIVERED: ['active', 'active', 'active'],
  DELIVERED_TO_SENDER: ['active', 'active', 'inactive'],
  CREATED: ['active', 'inactive', 'inactive'],
};

export const Transit: any = {
  TICKET_CREATED: 'تم إنشاء البوصيلة الشحن',
  PACKAGE_RECEIVED: 'تم استلام الشحنة',
  IN_TRANSIT: 'قيد التحصيل',
  NOT_YET_SHIPPED: 'لم يتم التوصيل بعد',
  OUT_FOR_DELIVERY: 'الشحنة خرجت للوصيل',
  DELIVERED: 'تم استلام الشحنة',
  WAITING_FOR_CUSTOMER_ACTION: 'تأجيل - العميل طلب التاجيل ليوم اخر',
  DELIVERED_TO_SENDER:'تم ارجاع المنتج'
};

export const Errors: any = {
  ErrorAr:
    'لا يمكن العثور على أي سجل لرقم التتبع هذا في الوقت الحالي ، يرجى التحقق من الرقم والمحاولة مرة أخرى لاحقًا. لمزيد من المساعدة ، يرجى التواصل بخدمة العملاء.',
};
