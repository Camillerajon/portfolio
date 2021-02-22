<template>
    <div class="main-container">

        <Header />

        <div class="breadcrumb-area">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="breadcrumb-wrap text-center">
                            <div class="section-title">
                                <span class="water-text">References</span>
                                <h2 class="title">References</h2>
                            </div>
                            <nav aria-label="breadcrumb">
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <router-link to="/">Home</router-link>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                       References
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Testimonial />

        <Footer />

        <OffCanvasMobileMenu />

        <BackToTop />

    </div>
</template>

<script>
    import Header from '@/components/Header';
    import Footer from '@/components/Footer';
    import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
    import BackToTop from '@/components/BackToTop';
import Testimonial from '../components/Testimonial.vue';
    export default {
        components: {
            Header,
            Testimonial,
            Footer,
            OffCanvasMobileMenu,
            BackToTop
        },
        metaInfo: {
            title: 'All references',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>
