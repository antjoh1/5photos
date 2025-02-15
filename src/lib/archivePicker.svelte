<script>
    import '../app.css';
    
</script>

<div class="picker">
	<div class="picker-window"></div>
    <ul class="picker-day">
        <li>Dec <span>24</span></li>
        <li>Jan <span>25</span></li>
        <li>Feb <span>25</span></li>
        <li>Mar <span>25</span></li>
    </ul>
</div>
    
<style>
    * {
        box-sizing: border-box;
    }

    .picker-window {
        position: absolute;
        border-top: 2px solid rgb(255, 255, 255);
        /* border-top: 1px solid rgb(255, 252, 252); */
        border-bottom: 2px solid rgb(255, 255, 255);
        height: 2em;
        left: 0;
        top: 50%;
        transform: translateY(-65%);
        width: 100%;
        pointer-events: none;
    }

    .picker {
        display: inline-grid;
        box-shadow: 0 .5vw 2vw -5px rgba(200, 200, 200, 0.435);
        border-radius: 15px;
        position: relative;
        border-top: 2rem solid black;
        border-bottom: 2rem solid black;
        padding-left: 1rem;
        padding-right: 1rem;
        background: var(--background-color-3);
        grid-template-columns: repeat(4, fit-content(500px));
        font-size: calc(0.5rem + 1vw);
        /* position: relative; */
        font-feature-settings: "tnum";
        font-weight: 200;
        
        &:before, &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 3em;
            pointer-events: none;
        }
        &:before {
            top: -1.3em;
            background: linear-gradient(white, rgba(255, 255, 255, .7))
        }
        &:after {
            bottom: -0.6em;
            height: 3em;
            background: linear-gradient(rgba(255, 255, 255, .7), white)
        }

        ul {
        max-height: 4em;
        overflow-y: scroll;
        margin-right: 1em;
        scroll-snap-type: y mandatory;
        padding-bottom: 3em;
        padding-top: 3em;
        }

        li {
            scroll-snap-align: center;
            height: 1.8em;
            text-align: right;
            text-justify: center;
            word-spacing: 0.4em;
        }
    }

    

    .picker-day {
        padding-right: .5em;
    }

</style>