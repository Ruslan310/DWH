import React from 'react';


const CardListPosition = ({positionCardList}) => {

    const format = (dateString) => {
        if (dateString) {
            let time = dateString.split('T')[1].substring(0, 5)
            let arrDate = dateString.split('T')[0].split('-')
            let date = `${arrDate[2]}.${arrDate[1]}.${arrDate[0]}`
            return {date, time}
        }
        return null
    }
    console.log(positionCardList.RegistrationDate)

    return (
        <div className='wrapperListPosition'>
            {positionCardList &&
            <ul>
                <li className='detailsBlock titleDetails'>1. Код</li>
                <li className='detailsBlock'>{positionCardList.Code} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>2. Наименование</li>
                <li className='detailsBlock'>{positionCardList.goodsNameRu} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>3. Наименование укр.</li>
                <li className='detailsBlock'>{positionCardList.goodsNameUa} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>5. Ставка НДС</li>
                <li className='detailsBlock'>{positionCardList.sk_NDS} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>6. Запрет ручной</li>
                <li className='detailsBlock'>{positionCardList.IsBanSale ? 'да' : 'нет'} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>7. Запрет автоматический</li>
                <li className='detailsBlock'>{positionCardList.IsBanAutomaticalySale ? 'да' : 'нет'} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>11. Не сканируется</li>
                <li className='detailsBlock'>{positionCardList.IsNotScan ? 'да' : 'нет'} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>18. ПКУ</li>
                <li className='detailsBlock'>{positionCardList.PKU  ? 'да' : 'нет'} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>21. 25 список</li>
                <li className='detailsBlock'>{positionCardList.IsList25  ? 'да' : 'нет'} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>22. Стелаж</li>
                <li className='detailsBlock'>{positionCardList.Shelving} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>23. Полка</li>
                <li className='detailsBlock'>{positionCardList.Shelf} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>24. Арт код</li>
                <li className='detailsBlock'>{positionCardList.ArtCode} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>25. Условия хранения</li>
                <li className='detailsBlock'>{positionCardList.sk_StorageCondition} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>26. АТС</li>
                <li className='detailsBlock'>{positionCardList.sk_ATC} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>32. АТС упрощенная</li>
                <li className='detailsBlock'>{positionCardList.sk_GoodsMorionSimplifiedATC  ? 'да' : 'нет'} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>35. Тип номенклатуры</li>
                <li className='detailsBlock'>{positionCardList.sk_GoodsType} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>36. Условие ввода</li>
                <li className='detailsBlock'>{positionCardList.sk_InputCondition} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>37. Температурный режим</li>
                <li className='detailsBlock'>{positionCardList.TemperatureFrom}-
                    {positionCardList.TemperatureTo} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>38. Производитель</li>
                <li className='detailsBlock'>{positionCardList.sk_Manufacturer} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>41. Бренд</li>
                <li className='detailsBlock'>{positionCardList.sk_Brand} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>42. Код УКТЕЗД</li>
                <li className='detailsBlock'>{positionCardList.CodeUKTEZD} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>44. Светочувствительность</li>
                <li className='detailsBlock'>{positionCardList.sk_Photosensitivity} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>45. Способ применения</li>
                <li className='detailsBlock'>{positionCardList.sk_MethodUse} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>49. Статус товара</li>
                <li className='detailsBlock'>{positionCardList.sk_GoodsStatus} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>50. Представитель</li>
                <li className='detailsBlock'>{positionCardList.sk_Representative} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>51. Приоритетная</li>
                <li className='detailsBlock'>{positionCardList.sk_GoodsPriority ? 'да' : 'нет'} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>52. Категория</li>
                <li className='detailsBlock'>{positionCardList.sk_Category} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>53. Товарная группа</li>
                <li className='detailsBlock'>{positionCardList.sk_GoodsSubGroup} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>54. Товарная подгруппа</li>
                <li className='detailsBlock'>{positionCardList.sk_ConsumerClassification} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>55. Семья</li>
                <li className='detailsBlock'>{positionCardList.sk_SubCategoryFamily} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>57. Ведущий препарат</li>
                <li className='detailsBlock'>{positionCardList.sk_GoodsLead} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>58. Дата создания</li>
                <li className='detailsBlock'>{format(positionCardList.CreatedDateTime).date} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>61. Дата окончания регистрации</li>
                <li className='detailsBlock'>{positionCardList.RegistrationDate} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>68. Форма выпуска (упрощенная)</li>
                <li className='detailsBlock'>{positionCardList.sk_GoodsReleaseFormSimple} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>70. Наименование рус. форма выпуска (упрощенная)</li>
                <li className='detailsBlock'>{positionCardList.sk_Outputform} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>71. Форма выпуска полная</li>
                <li className='detailsBlock'>{positionCardList.sk_GoodsReleaseFormExtended} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>72. Единица хранения остатков</li>
                <li className='detailsBlock'>{positionCardList.sk_GoodsUnitsSupplier} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>73. Коэффициент отпуска</li>
                <li className='detailsBlock'>{positionCardList.sk_GoodsUnitsSale} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>74. Единица поставщика</li>
                <li className='detailsBlock'>{positionCardList.sk_GoodsUnitsSupplier} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>74. Единица поставщика</li>
                <li className='detailsBlock'>{positionCardList.ProductReleasePackaging} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>75. Упаковка отпуска</li>
                <li className='detailsBlock'>"{positionCardList.sk_GoodsUnitsGeneralized}" </li>
                <hr/>

                <li className='detailsBlock titleDetails'>77. Единица измерения бух (Для Бух)</li>
                <li className='detailsBlock'>"{positionCardList.sk_GoodsUnitsAccounting}" </li>
                <hr/>

                <li className='detailsBlock titleDetails'>90. Классификатор</li>
                <li className='detailsBlock'>{positionCardList.sk_GoodsUnitsAccounting} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>91. Форма выпуска</li>
                <li className='detailsBlock'>{positionCardList.sk_GoogsSettingNameReleaseForm} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>93. Основное наименование</li>
                <li className='detailsBlock'>{positionCardList.sk_GoodsMainNameSet} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>96. Количество в упаковке</li>
                <li className='detailsBlock'>{positionCardList.СountInPackNew} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>99. Наименование сайт русское</li>
                <li className='detailsBlock'>{positionCardList.SiteNameRU} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>100. Наименование сайт украинское</li>
                <li className='detailsBlock'>{positionCardList.SiteNameUA} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>101. Объем</li>
                <li className='detailsBlock'>{positionCardList.sk_GoodsProductDetailVolume ? 'да' : 'нет'} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>103. Размер</li>
                <li className='detailsBlock'>{positionCardList.sk_GoodsProductDetailSize ? 'да' : 'нет'} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>109. Группа цен товара</li>
                <li className='detailsBlock'>{positionCardList.sk_GoodsPriceGroup} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>120. Рыночный статус</li>
                <li className='detailsBlock'>{positionCardList.sk_GoodsMarketStatus ? 'да' : 'нет'} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>130. Инструкция</li>
                <li className='detailsBlock'>{positionCardList.sk_Instruction ? 'да' : 'нет'} </li>
                <hr/>

                <li className='detailsBlock titleDetails'>158. Назначение товара</li>
                <li className='detailsBlock'>{positionCardList.sk_PurposeGoods ? 'да' : 'нет'} </li>
                <hr/>

            </ul>
            }
        </div>
    )
}

export default CardListPosition;


/*
Parent_sk_Goods(pin):7
goodsNameRu(pin):"ACE Отбеливатель жид. Gel Automat 1л"
goodsNameUa(pin):"ACE Відбілювач рідкий Gel Automat 1л"
ArtCode(pin):81356
Code(pin):"000046275"
AdditionalName(pin):""
AmountInMinUnit(pin):1
BeginRegistrationDate(pin):"2001-01-01T00:00:00.000Z"
CodeUKTEZD(pin):""
CreatedBy(pin):"Roz3"
CreatedDateTime(pin):"2013-01-01T00:00:00.000Z"
CreatedFromGoodsStatusId(pin):0
CreatedOn(pin):"2020-07-27T00:20:23.840Z"
ExpirationDate(pin):"2001-01-01T00:00:00.000Z"
IsActive(pin):true
IsBanAutomaticalySale(pin):false
IsBanSale(pin):false
IsChP(pin):true
IsDomestic(pin):null
IsFormedNDS(pin):false
IsForSite(pin):false
IsInstruction(pin):false
IsList25(pin):false
IsNewRegistrationForSite(pin):false
IsNotMedicine(pin):true
IsNotScan(pin):false
IsOrderedToMarketPoint(pin):false
IsOrphan(pin):false
IsPeriodic(pin):false
IsPresent(pin):false
IsPromotional(pin):false
IsReleasedWithoutRecipe(pin):true
IsSerialAccounting(pin):false
IsSpecificGoods(pin):false
IsStikerScan(pin):false
IsSympton(pin):0
IsSymptonDP(pin):false
IsWhithOutPack(pin):false
MainAnalog_sk_Goods(pin):21175
MainAnalogСoefficient(pin):1
MainUnitId(pin):null
ModifiedBy(pin):"UserDWH"
ModifiedOn(pin):"2021-08-16T20:41:21.867Z"
MorionStartDate(pin):"2001-01-01T00:00:00.000Z"
NoSeriesCertificateRequired(pin):false
NotNeedsCertificate(pin):false
NotUseInPrice(pin):false
PKU(pin):true
ProductReleasePackaging(pin):1
RatingSlave(pin):0
RegistrationDate(pin):"2015-02-19T00:00:00.000Z"
SaleNotUse(pin):false
SellFullPackage(pin):false
Shelf(pin):0
Shelving(pin):0
SiteNameRU(pin):"Отбеливатель жидкий ACE Gel Automat 1 л"
SiteNameUA(pin):"Відбілювач рідкий ACE Gel Automat 1 л"
SpecialNomenclature(pin):false
TemperatureFrom(pin):5
TemperatureTo(pin):25
TNByGroup(pin):false
TNBySubstance(pin):false
UNPacking(pin):""
WithoutPrescription(pin):false
СountInPack(pin):1
СountInPackNew(pin):1
sk_BaseNameGoods(pin):"АС Средство"
sk_Manufacturer(pin):"PROCTER & GAMBLE SP. O.O."
sk_Outputform(pin):"нет"
sk_Instruction(pin):null
sk_GoodsUnitsRemains(pin):446904
sk_GoodsImportTypeMorion(pin):-1
sk_ATC(pin):"эффективно восстанавливает микрофлору кишечника во время и после приема антибиотиков и при дисбактериозах."
sk_StorageCondition(pin):"нет"
sk_Photosensitivity(pin):"Не чувствительный"
sk_Brand(pin):"ACE"
sk_MethodUse(pin):"Прочее"
NameRU(pin):"1л"
sk_FoodInteraction(pin):"Empty row"
sk_PackageTypePrimary(pin):""
sk_PackageType(pin):""
sk_OwnerLicence(pin):""
sk_NDS(pin):"20%"
sk_GoodsReleaseFormSimple(pin):"нет"
sk_Category(pin):"Товары для дома и семьи"
sk_GoodsGroup(pin):null
sk_GoodsSubGroup(pin):"Стирка и уход за бельем"
sk_GoodsMarketingMorion(pin):""
sk_GoodsLicenseHolderMorion(pin):""
sk_GoodsCorporationMorion(pin):""
sk_GoodsMarketStatus(pin):""
sk_GoodsMorionNFC_1(pin):""
sk_GoodsMorionNFC_2(pin):""
DimGoodsMorionBAD_1(pin):""
sk_GoodsMorionBAD_2(pin):""
sk_GoodsMorionEPHMRA_1(pin):""
sk_GoodsMorionEPHMRA_2(pin):""
sk_GoodsMorionEPHMRA_3(pin):""
sk_GoodsMorionEPHMRA_4(pin):""
sk_GoodsMorionSimplifiedATC(pin):""
sk_GoodsReleaseFormExtended(pin):"нет"
sk_GoodsPriceGroup(pin):"Химия"
c(pin):"АС Средство"
sk_Representative(pin):"P&G_Fater (Ace_Comet)"
sk_UserInitiator(pin):""
sk_GoodsProductPackaging(pin):""
sk_GoodsUnitsGeneralized(pin):"штука"
sk_GoodsUnitsAccounting(pin):"шт"
sk_GoodsProductDetailVolume(pin):""
sk_GoogsSettingNameReleaseForm(pin):"нет"
sk_GoodsType(pin):"Товар"
sk_InputCondition(pin):"Empty row"
sk_ExtraOption(pin):"Empty row"
sk_GoodsStatus(pin):"Empty row"
sk_SubcategoryFamilyExtra(pin):""
sk_limitation(pin):"0"
sk_GoodsMorionCategory(pin):""
sk_GoodsProductDetailWeight(pin):""
sk_GoodsProductDetailSize(pin):""
sk_GoodsProductDetailDose(pin):""
sk_GoodsUnitsSale(pin):"упак. отп. (1 шт.)"
sk_GoodsUnitsSupplier(pin):"упак. отп. (1 шт.)"
sk_CompositionTypeGoods(pin):""
sk_MNN(pin):"Empty row"
sk_MorionCode(pin):16282
sk_ConsumerClassification(pin):"Стирка и уход за бельем"
sk_INN(pin):"-"
sk_PurposeGoods(pin):""
sk_SubCategoryFamily(pin):"Отбеливатели"
sk_GoodsPriority(pin):null
sk_GoodsLead(pin):"ACE Отбеливатель жид. Gel Automat 1л"
 */