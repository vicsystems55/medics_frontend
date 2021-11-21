<template lang="">
    <div>
 
    <div class="page-wrapper">
        <main class="page-auth">
            <div class="page-auth__center">
                <div class="page-auth__gradient">
                    <div class="page-auth__gradient-shape"></div>
                    <div class="page-auth__gradient-shape"></div>
                    <div class="auth-logo">
                        <img class="auth-logo__icon" src="img/content/logotype.svg" width="44" alt="#" />
                        <div class="auth-logo__text">RTVRS</div>
                    </div>
                    <div class="page-auth__gradient-column"></div>
                </div>
                <div class="auth-card card">
                    <div class="auth-card__shape"></div>
                    <div class="auth-card__shape"></div>
                    <div class="card__wrapper">
                        <div class="auth-card__left">
                            <div class="auth-card__logo">
                                <div class="auth-logo">
                                    <img class="auth-logo__icon" src="img/content/logotype.svg" width="44" alt="#" />
                                    <div class="auth-logo__text">RTVRS</div>
                                </div>
                            </div>
                            <img class="auth-card__bg auth-bg-image-light" src="img/content/auth-bg.jpg" alt="#">
                            <img class="auth-card__bg auth-bg-image-dark" src="img/content/auth-bg-dark.jpg" alt="#">
                        </div>
                        <Form class="auth-card__right" method="POST">
                            <div class="auth-card__top">
                                <h1 class="auth-card__title">Create Account</h1>
                            </div>
                            <div class="auth-card__body">
                                <div class="form-group">
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-email-2">
                                            <use xlink:href="#icon-email-2"></use>
                                        </svg>
                                    </span>
                                        <input class="input shadow" type="text" value="" required placeholder="Fullname">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-email-2">
                                            <use xlink:href="#icon-email-2"></use>
                                        </svg>
                                    </span>
                                        <input class="input shadow" type="email" value="example@mail.com" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-password">
                                            <use xlink:href="#icon-password"></use>
                                        </svg>
                                    </span>
                                        <input class="input shadow" type="passowrd" value="" placeholder="Create a password" required>
                                    </div>
                                </div>
                               
                                <div class="form-group">
                                    <div class="input-group input-group--prepend">
                                    <span class="input-group__prepend">
                                        <svg class="icon-icon-password">
                                            <use xlink:href="#icon-password"></use>
                                        </svg>
                                    </span>
                                        <input class="input shadow" type="password" placeholder="Password (Confirm)" required>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="checkbox">
                                        <input type="checkbox" checked><span class="checkbox__marker"><span class="checkbox__marker-icon">
                                    <svg class="icon-icon-checked">
                                        <use xlink:href="#icon-checked"></use>
                                    </svg></span></span><span class="ml-2">I accept the <a class="text-blue" href="#">terms & conditions</a></span>
                                    </label>
                                </div>
                                <div class="auth-card__submit">
                                    <button class="button button--primary button--block" type="button" @click="submit()"><span class="button__text">Create account</span>
                                    </button>
                                </div>
                            </div>
                            <div class="auth-card__bottom">
                                <div class="auth-card__sign">Already have account? <a class="text-blue" href="auth-login-v2.html">Login</a>
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </main>
    </div>
    </div>
</template>

<script>


export default {

    data() {
        return {
             fullPage: false
        }
    },

    methods: {
                    submit() {
                let loader = this.$loading.show({
                    // Optional parameters
                    container: this.fullPage ? null : this.$refs.formContainer,
                    canCancel: true,
                    onCancel: this.onCancel,
                    color: '#6CC3EC',
                });
                // simulate AJAX
                setTimeout(() => {
                    loader.hide()

                    this.$router.push('/verify')
                }, 5000)
            },
            onCancel() {
                console.log('User cancelled the loader.')
            }
    },
    
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

