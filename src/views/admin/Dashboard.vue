<template >
    <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="widget">
                        <div style="height: 130px;" class="widget__wrapper">

                            <div class="">
                                <h3 class="widget__title">States</h3>
                                <div class="widget__status-title text-grey">Total states registered</div>
                                <div class="widget__trade">
                                <span class="widget__trade-count">3</span>
                                <span class="trade-icon trade-icon--up">
                                    <svg class="icon-icon-trade-up">
                                        <use xlink:href="#icon-trade-up"></use>
                                    </svg>
                                </span>
                                <span class="badge badge--sm badge--green"></span>
                            </div>
                                <div class="widget__details">
                                    <router-link class="link-under text-grey" to="/Admin/States">Detail</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 <div class="col-md-4">
                    <div class="widget">
                        <div style="height: 130px;" class="widget__wrapper">

                            <div class="">
                                <h3 class="widget__title">Businesses</h3>
                                <div class="widget__status-title text-grey">Total businesses onboarded</div>
                                <div class="widget__trade">
                                <span class="widget__trade-count">30</span>
                                <span class="trade-icon trade-icon--up">
                                    <svg class="icon-icon-trade-up">
                                        <use xlink:href="#icon-trade-up"></use>
                                    </svg>
                                </span>
                                <span class="badge badge--sm badge--green"></span>
                            </div>
                                <div class="widget__details">
                                    <router-link class="link-under text-grey" to="/Admin/Businesses">Detail</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                 <div class="col-md-4">
                    <div class="widget">
                        <div style="height: 130px;" class="widget__wrapper">

                            <div class="">
                                <h3 class="widget__title">Demand Notices</h3>
                                <div class="widget__status-title text-grey">Total demand notices raised</div>
                                <div class="widget__trade">
                                <span class="widget__trade-count">13</span>
                                <span class="trade-icon trade-icon--up">
                                    <svg class="icon-icon-trade-up">
                                        <use xlink:href="#icon-trade-up"></use>
                                    </svg>
                                </span>
                                <span class="badge badge--sm badge--green"></span>
                            </div>
                                <div class="widget__details">
                                    <router-link class="link-under text-grey" to="/Admin/DemandNotices">Detail</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

           

               
            </div>
    </div>
</template>