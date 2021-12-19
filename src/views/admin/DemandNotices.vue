<template>
    <div>
         <div class="container">
                <div class="page-header">
                    <h1 class="page-header__title">Businesses <span class="text-grey">({{businessProfiles.length}})</span></h1>
                </div>
                <div class="page-tools">
                    <div class="page-tools__breadcrumbs">
                        <div class="breadcrumbs">
                            <div class="breadcrumbs__container">
                                <ol class="breadcrumbs__list">
                                    <li class="breadcrumbs__item">
                                        <a class="breadcrumbs__link" href="index.html">
                                            <svg class="icon-icon-home breadcrumbs__icon">
                                                <use xlink:href="#icon-home"></use>
                                            </svg>
                                            <svg class="icon-icon-keyboard-right breadcrumbs__arrow">
                                                <use xlink:href="#icon-keyboard-right"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="breadcrumbs__item active"><span class="breadcrumbs__link">Contacts</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="page-tools__right">
                        <ul class="page-tools__right-row nav" role="tablist">
                            <li class="page-tools__right-item"><a class="button-icon" href="#tab-grid" data-toggle="tab"><span class="button-icon__icon">
                      <svg class="icon-icon-grid">
                        <use xlink:href="#icon-grid"></use>
                      </svg></span></a>
                            </li>
                            <li class="page-tools__right-item"><a class="button-icon active" href="#tab-list" data-toggle="tab"><span class="button-icon__icon">
                      <svg class="icon-icon-list">
                        <use xlink:href="#icon-list"></use>
                      </svg></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="toolbox">
                    <div class="toolbox__row row gutter-bottom-xs">
                        <div class="toolbox__left col-12 col-lg">
                            <div class="toolbox__left-row row row--xs gutter-bottom-xs">
                                <div class="form-group form-group--inline col-12 col-sm-auto">
                                    <label class="form-label">Show</label>
                                    <div class="input-group input-group--white input-group--append">
                                        <input class="input input--select" type="text" value="10" size="1" data-toggle="dropdown" readonly><span class="input-group__arrow">
                        <svg class="icon-icon-keyboard-down">
                          <use xlink:href="#icon-keyboard-down"></use>
                        </svg></span>
                                        <div class="dropdown-menu dropdown-menu--right dropdown-menu--fluid js-dropdown-select"><a class="dropdown-menu__item active" href="#" tabindex="0" data-value="10">10</a><a class="dropdown-menu__item" href="#" tabindex="0" data-value="15">15</a><a class="dropdown-menu__item" href="#" tabindex="0" data-value="20">20</a>
                                            <a
                                            class="dropdown-menu__item" href="#" tabindex="0" data-value="25">25</a><a class="dropdown-menu__item" href="#" tabindex="0" data-value="50">50</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group form-group--inline col-12 col-sm-auto">
                                    <div class="toolbox__status input-group input-group--white input-group--append">
                                        <input class="input input--select" type="text" value="Newest" data-toggle="dropdown" readonly><span class="input-group__arrow">
                        <svg class="icon-icon-keyboard-down">
                          <use xlink:href="#icon-keyboard-down"></use>
                        </svg></span>
                                        <div class="dropdown-menu dropdown-menu--right dropdown-menu--fluid js-dropdown-select"><a class="dropdown-menu__item active" href="#" tabindex="0" data-value="Newest">Newest</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="toolbox__right col-12 col-lg-auto">
                            <div class="toolbox__right-row row row--xs flex-nowrap">
                                <div class="col col-lg-auto">
                                    <form class="toolbox__search" method="GET">
                                        <div class="input-group input-group--white input-group--prepend">
                                            <div class="input-group__prepend">
                                                <svg class="icon-icon-search">
                                                    <use xlink:href="#icon-search"></use>
                                                </svg>
                                            </div>
                                            <input class="input" type="text" placeholder="Search Contacts">
                                        </div>
                                    </form>
                                </div>
                                <div class="col-auto ml-auto">
                                    <button class="button-add button-add--blue" data-modal="#addContact"><span class="button-add__icon">
                        <svg class="icon-icon-plus">
                          <use xlink:href="#icon-plus"></use>
                        </svg></span><span class="button-add__text"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="table-wrapper tab-content">
                    <div class="tab-pane fade show active" id="tab-grid">
                        <div class="table-wrapper__content table-collapse scrollbar-thin scrollbar-visible" data-simplebar>
                            <table class="table table--spaces">
                                <colgroup>
                                    <col width="70px">
                                        <col>
                                            <col>
                                                <col>
                                                    <col>
                                                        <col>
                                </colgroup>
                                <thead class="table__header">
                                    <tr class="table__header-row">
                                        <th>
                                            <div class="table__checkbox table__checkbox--all">
                                                <label class="checkbox">
                                                    <input class="js-checkbox-all" type="checkbox" data-checkbox-all="product"><span class="checkbox__marker"><span class="checkbox__marker-icon">
                                <svg class="icon-icon-checked">
                                  <use xlink:href="#icon-checked"></use>
                                </svg></span></span>
                                                </label>
                                            </div>
                                        </th>
                                        <th class="table__th-sort mw-200"><span class="align-middle">Business Name</span><span class="sort sort--down"></span>
                                        </th>
                                     
                                        <th class="table__th-sort"><span class="align-middle">Location</span><span class="sort sort--down"></span>
                                        </th>
                                        <th class="table__th-sort"><span class="align-middle">Phone</span><span class="sort sort--down"></span>
                                        </th>
                                        <th class="table__actions"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="businessProfile in businessProfiles" :key="businessProfile.id" class="table__row">
                                        <td class="table__td">
                                            <div class="table__checkbox table__checkbox--all">
                                                <label class="checkbox">
                                                    <input type="checkbox" data-checkbox="product"><span class="checkbox__marker"><span class="checkbox__marker-icon">
                                <svg class="icon-icon-checked">
                                  <use xlink:href="#icon-checked"></use>
                                </svg></span></span>
                                                </label>
                                            </div>
                                        </td>
                                        <td class="table__td">
                                            <div class="media-item media-item--medium">
                                                <a class="media-item__icon color-red" href="customer-account.html">
                                                    <div class="media-item__icon-text">FB</div>
                                                    <img class="media-item__thumb" src="img/content/humans/item-1.jpg" alt="#">
                                                </a>
                                                <div class="media-item__right">
                                                    <h5 class="media-item__title"><a href="customer-account.html">{{businessProfile.businessName}}</a></h5>
                                                    <div class="text-sm text-grey">Founder & CEO</div>
                                                </div>
                                            </div>
                                        </td>
                                   
                                        <td class="table__td text-dark-theme">{{businessProfile.businessAddress}}</td>
                                        <td class="table__td text-light-theme text-nowrap"><a href="tel:#">{{businessProfile.businessPhoneNo}}</a>
                                        </td>
                                        <td class="table__td table__actions">
                                            <div class="items-more">
                                                <button class="items-more__button">
                                                    <svg class="icon-icon-more">
                                                        <use xlink:href="#icon-more"></use>
                                                    </svg>
                                                </button>
                                                <div class="dropdown-items dropdown-items--right">
                                                    <div class="dropdown-items__container">
                                                        <ul class="dropdown-items__list">
                                                            <li class="dropdown-items__item"><router-link class="dropdown-items__link" :to="{name:'AdminAssessment',params:{id:businessProfile.businessID} }"><span class="dropdown-items__link-icon">
                                                                <svg class="icon-icon-view">
                                                                    <use xlink:href="#icon-view"></use>
                                                                </svg></span>Assessments
                                                            </router-link>
                                                            </li>
                                                            <li class="dropdown-items__item">
                                                                <router-link :to="{name:'AdminDemandNotice',params:{id:businessProfile} }" class="dropdown-items__link"><span class="dropdown-items__link-icon">
                                                                    <svg class="icon-icon-duplicate">
                                                                        <use xlink:href="#icon-duplicate"></use>
                                                                    </svg></span>Notice
                                                                </router-link>
                                                            </li>
                                                           
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                   
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane fade " id="tab-list">
                        <div class="contacts-grid">
                            <div v-for="businessProfile in businessProfiles" :key="businessProfile.id" class="contact-card card">
                                <div class="card__wrapper">
                                    <div class="card__container">
                                        <div class="card__body">
                                            <div class="card__tools-more">
                                                <button class="items-more__button">
                                                    <svg class="icon-icon-more">
                                                        <use xlink:href="#icon-more"></use>
                                                    </svg>
                                                </button>
                                                <div class="dropdown-items dropdown-items--right">
                                                    <div class="dropdown-items__container">
                                                        <ul class="dropdown-items__list">
                                                            <li class="dropdown-items__item">
                                                                <router-link class="dropdown-items__link" :to="{name:'AdminAssessment',params:{id:businessProfile.businessID} }"><span class="dropdown-items__link-icon">
                                                                <svg class="icon-icon-refresh">
                                                                    <use xlink:href="#icon-refresh"></use>
                                                                </svg>
                                                            </span>Assessments</router-link>
                                                            </li>
                                                            <li class="dropdown-items__item">
                                                                <router-link class="dropdown-items__link" :to="{name:'AdminDemandNotice',params:{id:businessProfile} }"><span class="dropdown-items__link-icon">
                                                            <svg class="icon-icon-settings">
                                                                <use xlink:href="#icon-settings"></use>
                                                            </svg>
                                                            </span>Notice.</router-link>
                                                            </li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="contact-card__avatar">
                                                <svg viewBox="0 0 252 272" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <g filter="url(#filter0_dd)">
                                                        <path d="M55 199H197V221C197 221 153.752 224 126 224C98.248 224 55 221 55 221V199Z" fill="white"></path>
                                                    </g>
                                                    <g filter="url(#filter1_dd)">
                                                        <path d="M18.235 43.2287C19.2494 23.1848 35.1848 7.24941 55.2287 6.23501C76.8855 5.13899 104.551 4 126 4C147.449 4 175.114 5.13898 196.771 6.23501C216.815 7.24941 232.751 23.1848 233.765 43.2287C234.861 64.8855 236 92.5512 236 114C236 135.449 234.861 163.114 233.765 184.771C232.751 204.815 216.815 220.751 196.771 221.765C175.114 222.861 147.449 224 126 224C104.551 224 76.8855 222.861 55.2287 221.765C35.1848 220.751 19.2494 204.815 18.235 184.771C17.139 163.114 16 135.449 16 114C16 92.5512 17.139 64.8855 18.235 43.2287Z"
                                                        fill="url(#imagePattern0)"></path>
                                                    </g>
                                                    <defs>
                                                        <filter id="filter0_dd" x="23" y="183" width="206" height="89" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                            <feOffset dy="8" />
                                                            <feGaussianBlur stdDeviation="8" />
                                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                            <feOffset dy="16" />
                                                            <feGaussianBlur stdDeviation="16" />
                                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                                        </filter>
                                                        <filter id="filter1_dd" x="0" y="0" width="252" height="252" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                            <feOffset dy="12" />
                                                            <feGaussianBlur stdDeviation="8" />
                                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                            <feOffset dy="2" />
                                                            <feGaussianBlur stdDeviation="2" />
                                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                                                            <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                                        </filter>
                                                        <pattern id="imagePattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                            <use xlink:href="#avatarImage0" transform="scale(0.00142857)"></use>
                                                        </pattern>
                                                        <image id="avatarImage0" width="700" height="700" xlink:href="img/content/humans-2/item-1.jpg"></image>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <h5 class="contact-card__title">{{businessProfile.businessName}}</h5>
                                            <div class="contact-card__label"><span class="label label--primary">{{businessProfile.stateName}}</span>
                                            </div>
                                        </div>
                                        <div class="card__footer">
                                            <div class="card__container">
                                                <ul class="contact-card__address">
                                                    <li>
                                                        <div class="row row--xs justify-content-between">
                                                            <div class="contact-card__address-left col-auto">
                                                                <svg class="icon-icon-location">
                                                                    <use xlink:href="#icon-location"></use>
                                                                </svg>Location:
                                                            </div> <br>
                                                            <div class="col-auto text-light-theme">{{businessProfile.businessAddress}}</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="row row--xs justify-content-between">
                                                            <div class="contact-card__address-left col-auto">
                                                                <svg class="icon-icon-email">
                                                                    <use xlink:href="#icon-email"></use>
                                                                </svg>Email:
                                                            </div>
                                                            <div class="col-auto text-light-theme"><a href="mailto:#">{{businessProfile.businessEmail}}</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="row row--xs justify-content-between">
                                                            <div class="contact-card__address-left col-auto">
                                                                <svg class="icon-icon-phone">
                                                                    <use xlink:href="#icon-phone"></use>
                                                                </svg>Phone:
                                                            </div>
                                                            <div class="col-auto text-light-theme"><a href="tel:#">{{businessProfile.businessPhoneNo}}</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div class="table-wrapper__footer">
                        <div class="row">
                            <div class="table-wrapper__show-result col text-grey"><span class="d-none d-sm-inline-block">Showing</span> 1 to 10 <span class="d-none d-sm-inline-block">of 50 items</span>
                            </div>
                            <div class="table-wrapper__pagination col-auto">
                                <ol class="pagination">
                                    <li class="pagination__item">
                                        <a class="pagination__arrow pagination__arrow--prev" href="#">
                                            <svg class="icon-icon-keyboard-left">
                                                <use xlink:href="#icon-keyboard-left"></use>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="pagination__item active"><a class="pagination__link" href="#">1</a>
                                    </li>
                                    <li class="pagination__item"><a class="pagination__link" href="#">2</a>
                                    </li>
                                    <li class="pagination__item"><a class="pagination__link" href="#">3</a>
                                    </li>
                                    <li class="pagination__item pagination__item--dots">...</li>
                                    <li class="pagination__item"><a class="pagination__link" href="#">10</a>
                                    </li>
                                    <li class="pagination__item">
                                        <a class="pagination__arrow pagination__arrow--next" href="#">
                                            <svg class="icon-icon-keyboard-right">
                                                <use xlink:href="#icon-keyboard-right"></use>
                                            </svg>
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
</template>
<script>
import { useToast } from 'vue-toastification'

const toast = useToast()
export default {

    data() {
        return {
            businessProfiles: []
        }
    },

    methods: {
        getBusinessProfiles(){
            
                        let loader = this.$loading.show({
                            // Optional parameters
                            container: this.fullPage ? null : this.$refs.formContainer,
                            canCancel: true,
                            onCancel: this.onCancel,
                            color: '#6CC3EC',
                        });
                        // let self = this;
                                this.axios({
                                method: "get",
                                url: " https://micro.rtvrs.com.ng/api/BusinessProfiles/KADUNA",
                    
                                })
                                .then( (response)=> {
                                    //handle success


                                    console.log(response)
                                    this.businessProfiles = response.data

                                    localStorage.setItem('businessProfiles', JSON.stringify(response.data)) 

                                    loader.hide()


                                    
                                    // toast.success('Registration Successful');

                                    // this.$router.push('/'+response['data']['UserCategory'])
                                      
                                    
                                })
                                .catch(function (response) {

                                  
                                    //handle error
                                    console.log(response);
                                    toast.error(response);
                                    loader.hide()
                                });
        }
    },

    mounted() {
        this.getBusinessProfiles()
    },
    
}
</script>