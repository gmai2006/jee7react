import React from 'react';
import DataTable from './DataTable';

import {OcAddress} from './components/OcAddress';
import {OcAffiliate} from './components/OcAffiliate';
import {OcAffiliateActivity} from './components/OcAffiliateActivity';
import {OcAffiliateLogin} from './components/OcAffiliateLogin';
import {OcAffiliateTransaction} from './components/OcAffiliateTransaction';
import {OcApi} from './components/OcApi';
import {OcApiIp} from './components/OcApiIp';
import {OcApiSession} from './components/OcApiSession';
import {OcAttribute} from './components/OcAttribute';
import {OcAttributeDescription} from './components/OcAttributeDescription';
import {OcAttributeGroup} from './components/OcAttributeGroup';
import {OcAttributeGroupDescription} from './components/OcAttributeGroupDescription';
import {OcBanner} from './components/OcBanner';
import {OcBannerImage} from './components/OcBannerImage';
import {OcCart} from './components/OcCart';
import {OcCategory} from './components/OcCategory';
import {OcCategoryDescription} from './components/OcCategoryDescription';
import {OcCategoryFilter} from './components/OcCategoryFilter';
import {OcCategoryPath} from './components/OcCategoryPath';
import {OcCategoryToLayout} from './components/OcCategoryToLayout';
import {OcCategoryToStore} from './components/OcCategoryToStore';
import {OcCountry} from './components/OcCountry';
import {OcCoupon} from './components/OcCoupon';
import {OcCouponCategory} from './components/OcCouponCategory';
import {OcCouponHistory} from './components/OcCouponHistory';
import {OcCouponProduct} from './components/OcCouponProduct';
import {OcCurrency} from './components/OcCurrency';
import {OcCustomField} from './components/OcCustomField';
import {OcCustomFieldCustomerGroup} from './components/OcCustomFieldCustomerGroup';
import {OcCustomFieldDescription} from './components/OcCustomFieldDescription';
import {OcCustomFieldValue} from './components/OcCustomFieldValue';
import {OcCustomFieldValueDescription} from './components/OcCustomFieldValueDescription';
import {OcCustomer} from './components/OcCustomer';
import {OcCustomerActivity} from './components/OcCustomerActivity';
import {OcCustomerGroup} from './components/OcCustomerGroup';
import {OcCustomerGroupDescription} from './components/OcCustomerGroupDescription';
import {OcCustomerHistory} from './components/OcCustomerHistory';
import {OcCustomerIp} from './components/OcCustomerIp';
import {OcCustomerLogin} from './components/OcCustomerLogin';
import {OcCustomerOnline} from './components/OcCustomerOnline';
import {OcCustomerReward} from './components/OcCustomerReward';
import {OcCustomerSearch} from './components/OcCustomerSearch';
import {OcCustomerTransaction} from './components/OcCustomerTransaction';
import {OcCustomerWishlist} from './components/OcCustomerWishlist';
import {OcDownload} from './components/OcDownload';
import {OcDownloadDescription} from './components/OcDownloadDescription';
import {OcEvent} from './components/OcEvent';
import {OcExtension} from './components/OcExtension';
import {OcFilter} from './components/OcFilter';
import {OcFilterDescription} from './components/OcFilterDescription';
import {OcFilterGroup} from './components/OcFilterGroup';
import {OcFilterGroupDescription} from './components/OcFilterGroupDescription';
import {OcGeoZone} from './components/OcGeoZone';
import {OcInformation} from './components/OcInformation';
import {OcInformationDescription} from './components/OcInformationDescription';
import {OcInformationToLayout} from './components/OcInformationToLayout';
import {OcInformationToStore} from './components/OcInformationToStore';
import {OcLanguage} from './components/OcLanguage';
import {OcLayout} from './components/OcLayout';
import {OcLayoutModule} from './components/OcLayoutModule';
import {OcLayoutRoute} from './components/OcLayoutRoute';
import {OcLengthClass} from './components/OcLengthClass';
import {OcLengthClassDescription} from './components/OcLengthClassDescription';
import {OcLocation} from './components/OcLocation';
import {OcManufacturer} from './components/OcManufacturer';
import {OcManufacturerToStore} from './components/OcManufacturerToStore';
import {OcMarketing} from './components/OcMarketing';
import {OcMenu} from './components/OcMenu';
import {OcMenuDescription} from './components/OcMenuDescription';
import {OcMenuModule} from './components/OcMenuModule';
import {OcModification} from './components/OcModification';
import {OcModule} from './components/OcModule';
import {OcOption} from './components/OcOption';
import {OcOptionDescription} from './components/OcOptionDescription';
import {OcOptionValue} from './components/OcOptionValue';
import {OcOptionValueDescription} from './components/OcOptionValueDescription';
import {OcOrder} from './components/OcOrder';
import {OcOrderCustomField} from './components/OcOrderCustomField';
import {OcOrderHistory} from './components/OcOrderHistory';
import {OcOrderOption} from './components/OcOrderOption';
import {OcOrderProduct} from './components/OcOrderProduct';
import {OcOrderRecurring} from './components/OcOrderRecurring';
import {OcOrderRecurringTransaction} from './components/OcOrderRecurringTransaction';
import {OcOrderStatus} from './components/OcOrderStatus';
import {OcOrderTotal} from './components/OcOrderTotal';
import {OcOrderVoucher} from './components/OcOrderVoucher';
import {OcProduct} from './components/OcProduct';
import {OcProductAttribute} from './components/OcProductAttribute';
import {OcProductDescription} from './components/OcProductDescription';
import {OcProductDiscount} from './components/OcProductDiscount';
import {OcProductFilter} from './components/OcProductFilter';
import {OcProductImage} from './components/OcProductImage';
import {OcProductOption} from './components/OcProductOption';
import {OcProductOptionValue} from './components/OcProductOptionValue';
import {OcProductRecurring} from './components/OcProductRecurring';
import {OcProductRelated} from './components/OcProductRelated';
import {OcProductReward} from './components/OcProductReward';
import {OcProductSpecial} from './components/OcProductSpecial';
import {OcProductToCategory} from './components/OcProductToCategory';
import {OcProductToDownload} from './components/OcProductToDownload';
import {OcProductToLayout} from './components/OcProductToLayout';
import {OcProductToStore} from './components/OcProductToStore';
import {OcRecurring} from './components/OcRecurring';
import {OcRecurringDescription} from './components/OcRecurringDescription';
import {OcReturn} from './components/OcReturn';
import {OcReturnAction} from './components/OcReturnAction';
import {OcReturnHistory} from './components/OcReturnHistory';
import {OcReturnReason} from './components/OcReturnReason';
import {OcReturnStatus} from './components/OcReturnStatus';
import {OcReview} from './components/OcReview';
import {OcSetting} from './components/OcSetting';
import {OcStockStatus} from './components/OcStockStatus';
import {OcStore} from './components/OcStore';
import {OcTaxClass} from './components/OcTaxClass';
import {OcTaxRate} from './components/OcTaxRate';
import {OcTaxRateToCustomerGroup} from './components/OcTaxRateToCustomerGroup';
import {OcTaxRule} from './components/OcTaxRule';
import {OcTheme} from './components/OcTheme';
import {OcTranslation} from './components/OcTranslation';
import {OcUpload} from './components/OcUpload';
import {OcUrlAlias} from './components/OcUrlAlias';
import {OcUser} from './components/OcUser';
import {OcUserGroup} from './components/OcUserGroup';
import {OcVoucher} from './components/OcVoucher';
import {OcVoucherHistory} from './components/OcVoucherHistory';
import {OcVoucherTheme} from './components/OcVoucherTheme';
import {OcVoucherThemeDescription} from './components/OcVoucherThemeDescription';
import {OcWeightClass} from './components/OcWeightClass';
import {OcWeightClassDescription} from './components/OcWeightClassDescription';
import {OcZone} from './components/OcZone';
import {OcZoneToGeoZone} from './components/OcZoneToGeoZone';


export const Routes = [
  {
    path: '/OcAddress',
    exact: true,
    main: () => (DataTable)(OcAddress)
  },
  {
    path: '/OcAffiliate',
    exact: true,
    main: () => (DataTable)(OcAffiliate)
  },
  {
    path: '/OcAffiliateActivity',
    exact: true,
    main: () => (DataTable)(OcAffiliateActivity)
  },
  {
    path: '/OcAffiliateLogin',
    exact: true,
    main: () => (DataTable)(OcAffiliateLogin)
  },
  {
    path: '/OcAffiliateTransaction',
    exact: true,
    main: () => (DataTable)(OcAffiliateTransaction)
  },
  {
    path: '/OcApi',
    exact: true,
    main: () => (DataTable)(OcApi)
  },
  {
    path: '/OcApiIp',
    exact: true,
    main: () => (DataTable)(OcApiIp)
  },
  {
    path: '/OcApiSession',
    exact: true,
    main: () => (DataTable)(OcApiSession)
  },
  {
    path: '/OcAttribute',
    exact: true,
    main: () => (DataTable)(OcAttribute)
  },
  {
    path: '/OcAttributeDescription',
    exact: true,
    main: () => (DataTable)(OcAttributeDescription)
  },
  {
    path: '/OcAttributeGroup',
    exact: true,
    main: () => (DataTable)(OcAttributeGroup)
  },
  {
    path: '/OcAttributeGroupDescription',
    exact: true,
    main: () => (DataTable)(OcAttributeGroupDescription)
  },
  {
    path: '/OcBanner',
    exact: true,
    main: () => (DataTable)(OcBanner)
  },
  {
    path: '/OcBannerImage',
    exact: true,
    main: () => (DataTable)(OcBannerImage)
  },
  {
    path: '/OcCart',
    exact: true,
    main: () => (DataTable)(OcCart)
  },
  {
    path: '/OcCategory',
    exact: true,
    main: () => (DataTable)(OcCategory)
  },
  {
    path: '/OcCategoryDescription',
    exact: true,
    main: () => (DataTable)(OcCategoryDescription)
  },
  {
    path: '/OcCategoryFilter',
    exact: true,
    main: () => (DataTable)(OcCategoryFilter)
  },
  {
    path: '/OcCategoryPath',
    exact: true,
    main: () => (DataTable)(OcCategoryPath)
  },
  {
    path: '/OcCategoryToLayout',
    exact: true,
    main: () => (DataTable)(OcCategoryToLayout)
  },
  {
    path: '/OcCategoryToStore',
    exact: true,
    main: () => (DataTable)(OcCategoryToStore)
  },
  {
    path: '/OcCountry',
    exact: true,
    main: () => (DataTable)(OcCountry)
  },
  {
    path: '/OcCoupon',
    exact: true,
    main: () => (DataTable)(OcCoupon)
  },
  {
    path: '/OcCouponCategory',
    exact: true,
    main: () => (DataTable)(OcCouponCategory)
  },
  {
    path: '/OcCouponHistory',
    exact: true,
    main: () => (DataTable)(OcCouponHistory)
  },
  {
    path: '/OcCouponProduct',
    exact: true,
    main: () => (DataTable)(OcCouponProduct)
  },
  {
    path: '/OcCurrency',
    exact: true,
    main: () => (DataTable)(OcCurrency)
  },
  {
    path: '/OcCustomField',
    exact: true,
    main: () => (DataTable)(OcCustomField)
  },
  {
    path: '/OcCustomFieldCustomerGroup',
    exact: true,
    main: () => (DataTable)(OcCustomFieldCustomerGroup)
  },
  {
    path: '/OcCustomFieldDescription',
    exact: true,
    main: () => (DataTable)(OcCustomFieldDescription)
  },
  {
    path: '/OcCustomFieldValue',
    exact: true,
    main: () => (DataTable)(OcCustomFieldValue)
  },
  {
    path: '/OcCustomFieldValueDescription',
    exact: true,
    main: () => (DataTable)(OcCustomFieldValueDescription)
  },
  {
    path: '/OcCustomer',
    exact: true,
    main: () => (DataTable)(OcCustomer)
  },
  {
    path: '/OcCustomerActivity',
    exact: true,
    main: () => (DataTable)(OcCustomerActivity)
  },
  {
    path: '/OcCustomerGroup',
    exact: true,
    main: () => (DataTable)(OcCustomerGroup)
  },
  {
    path: '/OcCustomerGroupDescription',
    exact: true,
    main: () => (DataTable)(OcCustomerGroupDescription)
  },
  {
    path: '/OcCustomerHistory',
    exact: true,
    main: () => (DataTable)(OcCustomerHistory)
  },
  {
    path: '/OcCustomerIp',
    exact: true,
    main: () => (DataTable)(OcCustomerIp)
  },
  {
    path: '/OcCustomerLogin',
    exact: true,
    main: () => (DataTable)(OcCustomerLogin)
  },
  {
    path: '/OcCustomerOnline',
    exact: true,
    main: () => (DataTable)(OcCustomerOnline)
  },
  {
    path: '/OcCustomerReward',
    exact: true,
    main: () => (DataTable)(OcCustomerReward)
  },
  {
    path: '/OcCustomerSearch',
    exact: true,
    main: () => (DataTable)(OcCustomerSearch)
  },
  {
    path: '/OcCustomerTransaction',
    exact: true,
    main: () => (DataTable)(OcCustomerTransaction)
  },
  {
    path: '/OcCustomerWishlist',
    exact: true,
    main: () => (DataTable)(OcCustomerWishlist)
  },
  {
    path: '/OcDownload',
    exact: true,
    main: () => (DataTable)(OcDownload)
  },
  {
    path: '/OcDownloadDescription',
    exact: true,
    main: () => (DataTable)(OcDownloadDescription)
  },
  {
    path: '/OcEvent',
    exact: true,
    main: () => (DataTable)(OcEvent)
  },
  {
    path: '/OcExtension',
    exact: true,
    main: () => (DataTable)(OcExtension)
  },
  {
    path: '/OcFilter',
    exact: true,
    main: () => (DataTable)(OcFilter)
  },
  {
    path: '/OcFilterDescription',
    exact: true,
    main: () => (DataTable)(OcFilterDescription)
  },
  {
    path: '/OcFilterGroup',
    exact: true,
    main: () => (DataTable)(OcFilterGroup)
  },
  {
    path: '/OcFilterGroupDescription',
    exact: true,
    main: () => (DataTable)(OcFilterGroupDescription)
  },
  {
    path: '/OcGeoZone',
    exact: true,
    main: () => (DataTable)(OcGeoZone)
  },
  {
    path: '/OcInformation',
    exact: true,
    main: () => (DataTable)(OcInformation)
  },
  {
    path: '/OcInformationDescription',
    exact: true,
    main: () => (DataTable)(OcInformationDescription)
  },
  {
    path: '/OcInformationToLayout',
    exact: true,
    main: () => (DataTable)(OcInformationToLayout)
  },
  {
    path: '/OcInformationToStore',
    exact: true,
    main: () => (DataTable)(OcInformationToStore)
  },
  {
    path: '/OcLanguage',
    exact: true,
    main: () => (DataTable)(OcLanguage)
  },
  {
    path: '/OcLayout',
    exact: true,
    main: () => (DataTable)(OcLayout)
  },
  {
    path: '/OcLayoutModule',
    exact: true,
    main: () => (DataTable)(OcLayoutModule)
  },
  {
    path: '/OcLayoutRoute',
    exact: true,
    main: () => (DataTable)(OcLayoutRoute)
  },
  {
    path: '/OcLengthClass',
    exact: true,
    main: () => (DataTable)(OcLengthClass)
  },
  {
    path: '/OcLengthClassDescription',
    exact: true,
    main: () => (DataTable)(OcLengthClassDescription)
  },
  {
    path: '/OcLocation',
    exact: true,
    main: () => (DataTable)(OcLocation)
  },
  {
    path: '/OcManufacturer',
    exact: true,
    main: () => (DataTable)(OcManufacturer)
  },
  {
    path: '/OcManufacturerToStore',
    exact: true,
    main: () => (DataTable)(OcManufacturerToStore)
  },
  {
    path: '/OcMarketing',
    exact: true,
    main: () => (DataTable)(OcMarketing)
  },
  {
    path: '/OcMenu',
    exact: true,
    main: () => (DataTable)(OcMenu)
  },
  {
    path: '/OcMenuDescription',
    exact: true,
    main: () => (DataTable)(OcMenuDescription)
  },
  {
    path: '/OcMenuModule',
    exact: true,
    main: () => (DataTable)(OcMenuModule)
  },
  {
    path: '/OcModification',
    exact: true,
    main: () => (DataTable)(OcModification)
  },
  {
    path: '/OcModule',
    exact: true,
    main: () => (DataTable)(OcModule)
  },
  {
    path: '/OcOption',
    exact: true,
    main: () => (DataTable)(OcOption)
  },
  {
    path: '/OcOptionDescription',
    exact: true,
    main: () => (DataTable)(OcOptionDescription)
  },
  {
    path: '/OcOptionValue',
    exact: true,
    main: () => (DataTable)(OcOptionValue)
  },
  {
    path: '/OcOptionValueDescription',
    exact: true,
    main: () => (DataTable)(OcOptionValueDescription)
  },
  {
    path: '/OcOrder',
    exact: true,
    main: () => (DataTable)(OcOrder)
  },
  {
    path: '/OcOrderCustomField',
    exact: true,
    main: () => (DataTable)(OcOrderCustomField)
  },
  {
    path: '/OcOrderHistory',
    exact: true,
    main: () => (DataTable)(OcOrderHistory)
  },
  {
    path: '/OcOrderOption',
    exact: true,
    main: () => (DataTable)(OcOrderOption)
  },
  {
    path: '/OcOrderProduct',
    exact: true,
    main: () => (DataTable)(OcOrderProduct)
  },
  {
    path: '/OcOrderRecurring',
    exact: true,
    main: () => (DataTable)(OcOrderRecurring)
  },
  {
    path: '/OcOrderRecurringTransaction',
    exact: true,
    main: () => (DataTable)(OcOrderRecurringTransaction)
  },
  {
    path: '/OcOrderStatus',
    exact: true,
    main: () => (DataTable)(OcOrderStatus)
  },
  {
    path: '/OcOrderTotal',
    exact: true,
    main: () => (DataTable)(OcOrderTotal)
  },
  {
    path: '/OcOrderVoucher',
    exact: true,
    main: () => (DataTable)(OcOrderVoucher)
  },
  {
    path: '/OcProduct',
    exact: true,
    main: () => (DataTable)(OcProduct)
  },
  {
    path: '/OcProductAttribute',
    exact: true,
    main: () => (DataTable)(OcProductAttribute)
  },
  {
    path: '/OcProductDescription',
    exact: true,
    main: () => (DataTable)(OcProductDescription)
  },
  {
    path: '/OcProductDiscount',
    exact: true,
    main: () => (DataTable)(OcProductDiscount)
  },
  {
    path: '/OcProductFilter',
    exact: true,
    main: () => (DataTable)(OcProductFilter)
  },
  {
    path: '/OcProductImage',
    exact: true,
    main: () => (DataTable)(OcProductImage)
  },
  {
    path: '/OcProductOption',
    exact: true,
    main: () => (DataTable)(OcProductOption)
  },
  {
    path: '/OcProductOptionValue',
    exact: true,
    main: () => (DataTable)(OcProductOptionValue)
  },
  {
    path: '/OcProductRecurring',
    exact: true,
    main: () => (DataTable)(OcProductRecurring)
  },
  {
    path: '/OcProductRelated',
    exact: true,
    main: () => (DataTable)(OcProductRelated)
  },
  {
    path: '/OcProductReward',
    exact: true,
    main: () => (DataTable)(OcProductReward)
  },
  {
    path: '/OcProductSpecial',
    exact: true,
    main: () => (DataTable)(OcProductSpecial)
  },
  {
    path: '/OcProductToCategory',
    exact: true,
    main: () => (DataTable)(OcProductToCategory)
  },
  {
    path: '/OcProductToDownload',
    exact: true,
    main: () => (DataTable)(OcProductToDownload)
  },
  {
    path: '/OcProductToLayout',
    exact: true,
    main: () => (DataTable)(OcProductToLayout)
  },
  {
    path: '/OcProductToStore',
    exact: true,
    main: () => (DataTable)(OcProductToStore)
  },
  {
    path: '/OcRecurring',
    exact: true,
    main: () => (DataTable)(OcRecurring)
  },
  {
    path: '/OcRecurringDescription',
    exact: true,
    main: () => (DataTable)(OcRecurringDescription)
  },
  {
    path: '/OcReturn',
    exact: true,
    main: () => (DataTable)(OcReturn)
  },
  {
    path: '/OcReturnAction',
    exact: true,
    main: () => (DataTable)(OcReturnAction)
  },
  {
    path: '/OcReturnHistory',
    exact: true,
    main: () => (DataTable)(OcReturnHistory)
  },
  {
    path: '/OcReturnReason',
    exact: true,
    main: () => (DataTable)(OcReturnReason)
  },
  {
    path: '/OcReturnStatus',
    exact: true,
    main: () => (DataTable)(OcReturnStatus)
  },
  {
    path: '/OcReview',
    exact: true,
    main: () => (DataTable)(OcReview)
  },
  {
    path: '/OcSetting',
    exact: true,
    main: () => (DataTable)(OcSetting)
  },
  {
    path: '/OcStockStatus',
    exact: true,
    main: () => (DataTable)(OcStockStatus)
  },
  {
    path: '/OcStore',
    exact: true,
    main: () => (DataTable)(OcStore)
  },
  {
    path: '/OcTaxClass',
    exact: true,
    main: () => (DataTable)(OcTaxClass)
  },
  {
    path: '/OcTaxRate',
    exact: true,
    main: () => (DataTable)(OcTaxRate)
  },
  {
    path: '/OcTaxRateToCustomerGroup',
    exact: true,
    main: () => (DataTable)(OcTaxRateToCustomerGroup)
  },
  {
    path: '/OcTaxRule',
    exact: true,
    main: () => (DataTable)(OcTaxRule)
  },
  {
    path: '/OcTheme',
    exact: true,
    main: () => (DataTable)(OcTheme)
  },
  {
    path: '/OcTranslation',
    exact: true,
    main: () => (DataTable)(OcTranslation)
  },
  {
    path: '/OcUpload',
    exact: true,
    main: () => (DataTable)(OcUpload)
  },
  {
    path: '/OcUrlAlias',
    exact: true,
    main: () => (DataTable)(OcUrlAlias)
  },
  {
    path: '/OcUser',
    exact: true,
    main: () => (DataTable)(OcUser)
  },
  {
    path: '/OcUserGroup',
    exact: true,
    main: () => (DataTable)(OcUserGroup)
  },
  {
    path: '/OcVoucher',
    exact: true,
    main: () => (DataTable)(OcVoucher)
  },
  {
    path: '/OcVoucherHistory',
    exact: true,
    main: () => (DataTable)(OcVoucherHistory)
  },
  {
    path: '/OcVoucherTheme',
    exact: true,
    main: () => (DataTable)(OcVoucherTheme)
  },
  {
    path: '/OcVoucherThemeDescription',
    exact: true,
    main: () => (DataTable)(OcVoucherThemeDescription)
  },
  {
    path: '/OcWeightClass',
    exact: true,
    main: () => (DataTable)(OcWeightClass)
  },
  {
    path: '/OcWeightClassDescription',
    exact: true,
    main: () => (DataTable)(OcWeightClassDescription)
  },
  {
    path: '/OcZone',
    exact: true,
    main: () => (DataTable)(OcZone)
  },
  {
    path: '/OcZoneToGeoZone',
    exact: true,
    main: () => (DataTable)(OcZoneToGeoZone)
  },

];