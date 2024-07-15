import {useSpring, animated} from 'react-spring'
import Computer from '/public/assets/stats/computers.svg'
import CountUp from 'react-countup';



// const Number = ({n}) => {
//     const {number} = useSpring({
//         from: {
//             number: 0
//         },
//         number: 0,
//         delay: 200,
//         config: {
//             mass: 1,
//             tension: 20,
//             friction: 10
//         }

//     })

//     return <animated.div>{
//         number.to((n) => n.toFixed(0))
//     } </animated.div>

// }


const StaticSection = () => {


    const statices = [
        {   
            title: "Member d'équipe ",
            number: '5',
            sign:'+',
            number2:null,
            svg:  (
            <svg height="40pt" viewBox="0 -6 512.00088 512" width="40pt" xmlns="http://www.w3.org/2000/svg"><path d="m210.359375 447.886719-1.503906 7.347656 1.449219-7.355469c-4.0625-.800781-8.007813 1.84375-8.808594 5.90625-.800782 4.066406 1.84375 8.007813 5.910156 8.808594.011719.003906.125.023438.136719.027344.476562.089844.949219.136718 1.417969.136718 3.527343 0 6.671874-2.5 7.355468-6.09375.78125-4.070312-1.886718-8-5.957031-8.777343zm0 0"/><path d="m267.703125 450.296875.746094 7.460937-.769531-7.457031c-4.121094.421875-7.117188 4.105469-6.691407 8.226563.394531 3.859375 3.652344 6.734375 7.449219 6.734375.257812 0 .519531-.015625.777344-.039063l.207031-.023437c4.101563-.480469 7.011719-4.179688 6.554687-8.28125-.460937-4.097657-4.171874-7.050781-8.273437-6.621094zm0 0"/><path d="m238.992188 451.242188s-.105469-.003907-.109376-.003907c-4.132812-.1875-7.585937 3.023438-7.773437 7.160157-.183594 4.136718 3.066406 7.640624 7.203125 7.828124.117188.007813.230469.007813.347656.007813 3.984375 0 7.304688-3.136719 7.484375-7.160156.1875-4.136719-3.011719-7.644531-7.152343-7.832031zm0 0"/><path d="m182.65625 440.265625-.09375-.035156c-3.898438-1.398438-8.148438.640625-9.546875 4.539062-1.402344 3.898438.667969 8.210938 4.566406 9.613281.839844.300782 1.695313.441407 2.535157.441407 3.074218 0 5.960937-1.902344 7.058593-4.964844 1.402344-3.898437-.621093-8.195313-4.519531-9.59375zm0 0"/><path d="m296.007812 445.046875 1.847657 7.269531-1.871094-7.261718c-4.011719 1.03125-6.425781 5.121093-5.394531 9.132812.871094 3.382812 3.917968 5.632812 7.257812 5.632812.621094 0 1.25-.078124 1.878906-.242187.03125-.007813.164063-.042969.199219-.050781 3.980469-1.085938 6.308594-5.175782 5.246094-9.164063-1.0625-3.984375-5.167969-6.355469-9.164063-5.316406zm0 0"/><path d="m323.121094 435.589844 2.972656 6.882812-2.996094-6.875c-3.796875 1.65625-5.535156 6.074219-3.882812 9.871094 1.230468 2.824219 3.988281 4.507812 6.882812 4.507812.996094 0 2.015625-.203124 2.988282-.625.03125-.015624.152343-.066406.183593-.082031 3.761719-1.699219 5.421875-6.105469 3.742188-9.875-1.679688-3.773437-6.109375-5.464843-9.890625-3.804687zm0 0"/><path d="m154.007812 93.699219c1.203126 0 2.425782-.289063 3.554688-.890625 3.65625-1.949219 5.035156-6.492188 3.085938-10.148438-1.949219-3.652344-6.488282-5.039062-10.144532-3.085937l-.089844.046875c-3.652343 1.949218-4.992187 6.46875-3.042968 10.125 1.34375 2.523437 3.953125 3.953125 6.636718 3.953125zm0 0"/><path d="m67.253906 177.46875c1.113282.582031 2.304688.859375 3.480469.859375 2.699219 0 5.308594-1.460937 6.648437-4.019531l.132813-.261719c1.828125-3.71875.296875-8.214844-3.421875-10.039063-3.691406-1.820312-8.152344-.320312-10.003906 3.347657-1.914063 3.664062-.5 8.191406 3.164062 10.113281zm0 0"/><path d="m56.695312 205.683594c.796876.269531 1.605469.398437 2.40625.398437 3.125 0 6.042969-1.972656 7.101563-5.097656l.097656-.296875c1.21875-3.957031-1.003906-8.15625-4.964843-9.371094-3.925782-1.210937-8.09375.96875-9.347657 4.875-1.316406 3.917969.789063 8.167969 4.707031 9.492188zm0 0"/><path d="m82.050781 151.230469c1.332031.96875 2.875 1.4375 4.40625 1.4375 2.316407 0 4.605469-1.074219 6.070313-3.089844l.097656-.132813c2.40625-3.367187 1.621094-8.039062-1.738281-10.445312-3.363281-2.410156-8.050781-1.636719-10.464844 1.722656l6.042969 4.445313-6.066406-4.414063c-2.4375 3.351563-1.695313 8.042969 1.652343 10.476563zm0 0"/><path d="m128.546875 109.898438c1.574219 0 3.160156-.496094 4.515625-1.527344 3.34375-2.445313 4.066406-7.136719 1.621094-10.480469-2.449219-3.34375-7.140625-4.066406-10.480469-1.621094l-.1875.136719c-3.296875 2.503906-3.953125 7.21875-1.449219 10.519531 1.476563 1.945313 3.714844 2.972657 5.980469 2.972657zm0 0"/><path d="m50 319.425781c.992188 3.222657 3.953125 5.289063 7.15625 5.289063.730469 0 1.476562-.109375 2.210938-.335938 3.9375-1.207031 6.160156-5.378906 4.980468-9.324218-1.128906-3.9375-5.210937-6.25-9.183594-5.167969-3.996093 1.089843-6.351562 5.214843-5.261718 9.210937.023437.078125.074218.25.097656.328125zm0 0"/><path d="m105.890625 129.664062c1.949219 0 3.898437-.753906 5.371094-2.253906 2.925781-2.929687 2.925781-7.679687 0-10.605468-2.929688-2.929688-7.679688-2.929688-10.609375 0l-.125.125c-2.898438 2.957031-2.839844 7.699218.117187 10.597656 1.457031 1.429687 3.351563 2.136718 5.246094 2.136718zm0 0"/><path d="m58.289062 286.726562c-.527343-4.074218-4.25-6.964843-8.328124-6.480468-4.109376.492187-7.046876 4.222656-6.558594 8.335937l.042968.300781c.546876 3.726563 3.746094 6.398438 7.40625 6.398438.359376 0 .726563-.027344 1.097657-.082031 4.082031-.59375 6.914062-4.390625 6.339843-8.472657zm0 0"/><path d="m48.867188 265.246094c.078124 0 .152343.003906.226562.003906 4.039062 0 7.375-3.214844 7.492188-7.28125l.007812-.320312c0-4.144532-3.359375-7.5-7.5-7.5-4.113281 0-7.449219 3.304687-7.5 7.402343-.109375 4.132813 3.144531 7.574219 7.273438 7.695313zm0 0"/><path d="m50.511719 235.167969c.449219.078125.890625.117187 1.332031.117187 3.5625 0 6.722656-2.550781 7.375-6.179687.019531-.109375.035156-.21875.050781-.328125.605469-4.097656-2.226562-7.910156-6.328125-8.511719-4.050781-.601563-7.84375 2.183594-8.496094 6.222656-.710937 4.070313 2 7.949219 6.066407 8.679688zm0 0"/><path d="m404.300781 153.597656c1.453125 2.109375 3.789063 3.238282 6.171875 3.238282 1.464844 0 2.949219-.429688 4.246094-1.324219 3.410156-2.34375 4.273438-7.015625 1.929688-10.429688l-6.234376 4.171875 6.210938-4.207031c-2.328125-3.429687-6.992188-4.324219-10.417969-2-3.429687 2.324219-4.324219 6.988281-2 10.417969zm0 0"/><path d="m442.601562 229.070312c-4.117187.460938-7.078124 4.175782-6.613281 8.292969l.039063.324219c.535156 3.738281 3.746094 6.4375 7.417968 6.4375.351563 0 .710938-.023438 1.070313-.074219 4.066406-.582031 6.902344-4.328125 6.375-8.390625-.472656-4.105468-4.199219-7.050781-8.289063-6.589844zm0 0"/><path d="m429.945312 207.90625.03125.097656c.960938 3.269532 3.949219 5.386719 7.191407 5.386719.699219 0 1.410156-.097656 2.117187-.308594 3.976563-1.167969 6.25-5.335937 5.082032-9.3125l-.03125-.097656c-1.167969-3.976563-5.335938-6.25-9.3125-5.078125-3.972657 1.167969-6.246094 5.335938-5.078126 9.3125zm0 0"/><path d="m419.351562 179.863281c1.308594 2.660157 3.984376 4.210938 6.765626 4.210938 1.105468 0 2.230468-.246094 3.289062-.769531 3.714844-1.828126 5.257812-6.296876 3.425781-10.015626l-6.796875 3.167969 6.789063-3.183593c-1.757813-3.75-6.222657-5.363282-9.972657-3.605469-3.75 1.757812-5.367187 6.222656-3.609374 9.972656zm0 0"/><path d="m385.410156 130.175781c1.46875 1.5 3.410156 2.25 5.355469 2.25 1.894531 0 3.789063-.710937 5.25-2.144531 2.9375-2.875 3.003906-7.574219.171875-10.535156-2.808594-3.027344-7.542969-3.210938-10.582031-.40625-3.042969 2.808594-3.230469 7.554687-.421875 10.597656zm0 0"/><path d="m445.039062 260.386719c-4.121093-.105469-7.570312 3.125-7.714843 7.246093-.1875 4.105469 2.964843 7.601563 7.074219 7.832032.144531.007812.28125.011718.425781.011718 3.949219 0 7.257812-3.089843 7.480469-7.085937l.011718-.308594c.117188-4.136719-3.140625-7.574219-7.277344-7.695312zm0 0"/><path d="m337.449219 93.347656.179687.097656c1.117188.59375 2.316406.875 3.496094.875 2.667969 0 5.25-1.4375 6.605469-3.957031 1.953125-3.636719.578125-8.183593-3.046875-10.152343l-3.628906 6.5625 3.605468-6.578126c-3.632812-1.992187-8.191406-.660156-10.183594 2.972657-1.988281 3.628906-.660156 8.191406 2.972657 10.179687zm0 0"/><path d="m362.816406 109.796875.117188.089844c1.355468 1.027343 2.945312 1.523437 4.527344 1.523437 2.265624 0 4.503906-1.023437 5.980468-2.96875 2.503906-3.300781 1.855469-8.003906-1.441406-10.507812l-.050781-.035156c-3.285157-2.523438-7.992188-1.90625-10.515625 1.378906-2.523438 3.285156-1.902344 7.996094 1.382812 10.519531zm0 0"/><path d="m507.371094 373.929688-35.207032-35.269532c-2.996093-3-6.976562-4.652344-11.214843-4.652344-4.234375 0-8.21875 1.652344-11.210938 4.652344l-.816406.816406-2.3125-2.3125c-2.855469-2.863281-5.066406-6.195312-6.566406-9.824218-.132813-.480469-.308594-.949219-.535157-1.390625-1.148437-3.226563-1.746093-6.660157-1.746093-10.1875v-9.976563c.683593.359375 1.429687.621094 2.230469.757813.429687.074219.855468.109375 1.277343.109375 3.558594 0 6.707031-2.539063 7.367188-6.148438.800781-4.054687-1.828125-7.996094-5.886719-8.808594-1.785156-.355468-3.550781-.046874-5.035156.757813-.460938-10.65625-4.816406-20.609375-12.394532-28.203125l-34.15625-34.214844c-7.664062-7.675781-17.855468-11.902344-28.695312-11.902344-8.390625 0-16.382812 2.542969-23.125 7.25l-3.625-3.644531v-85.78125c0-10.339843-3.753906-20.316406-10.566406-28.085937-4.847656-5.523438-7.515625-12.617188-7.515625-19.976563v-6.285156h.515625c8.742187 0 15.855468-7.113281 15.855468-15.859375v-49.890625c0-8.746094-7.113281-15.859375-15.855468-15.859375h-140.097656c-8.742188 0-15.855469 7.113281-15.855469 15.859375v49.890625c0 8.746094 7.113281 15.859375 15.855469 15.859375h1.15625v3.289063c0 8.085937-3.144532 15.6875-8.851563 21.402343l-15.121094 15.148438c-8.023437 8.039062-12.441406 18.722656-12.441406 30.089843v48.386719c0 6.574219 1.578125 12.78125 4.355469 18.28125-9.945313.574219-19.214844 4.71875-26.316406 11.828125l-34.15625 34.214844c-8.023438 8.039062-12.441407 18.726562-12.441407 30.089844v21.421875c0 8.085937-3.140625 15.6875-8.847656 21.402343l-2.285156 2.289063c-.011719.007813-.019531.015625-.027344.023437l-.8125-.816406c-2.996094-3-6.976563-4.652344-11.214844-4.652344-4.234375 0-8.21875 1.652344-11.210937 4.652344l-35.210938 35.269532c-6.171875 6.183593-6.171875 16.246093 0 22.429687l12.058594 12.074219c2.925781 2.933594 7.675781 2.9375 10.605469.011718 2.929687-2.929687 2.9375-7.675781.007812-10.609374l-12.054687-12.078126c-.339844-.339843-.339844-.890624 0-1.230468l35.210937-35.269532c.328125-.328124.863281-.332031 1.191407 0l6.121093 6.132813h.003907l83.582031 83.726563 9.363281 9.382812c.339844.339844.339844.890625 0 1.230469l-35.207031 35.269531c-.332031.332031-.867188.332031-1.195313 0l-65.78125-65.894531c-2.925781-2.933594-7.675781-2.9375-10.605468-.011719-2.933594 2.929688-2.9375 7.675781-.011719 10.609375l65.785156 65.894531c2.992187 3 6.976563 4.652344 11.214844 4.652344 4.234375 0 8.214843-1.652344 11.210937-4.652344l35.207032-35.269531c6.171874-6.179687 6.171874-16.242187 0-22.425781l-.382813-.382813 4.441406-4.449219c5.1875-5.199218 12.078125-8.324218 19.402344-8.796874 10.308594-.667969 20.007813-5.066407 27.308594-12.382813l32.34375-32.414063c9.328125-2.449218 16.589843-10.046874 18.5625-19.5625 3.324219 1.582032 7.039062 2.472657 10.960937 2.472657 14.105469 0 25.582032-11.488281 25.582032-25.613281v-17.808594c3.226562 1.472656 6.808593 2.300781 10.582031 2.300781 14.105469 0 25.578125-11.488281 25.578125-25.613281v-52.648438l23.070312 23.183594c1.464844 1.472656 3.390625 2.207031 5.316406 2.207031 1.914063 0 3.828126-.726562 5.292969-2.183593 2.933594-2.921876 2.945313-7.667969.023438-10.605469l-19.234375-19.328125c3.722656-2.050782 7.917968-3.144532 12.285156-3.144532 6.828125 0 13.25 2.664063 18.078125 7.503907l34.15625 34.210937c5.195313 5.207032 8.058594 12.128906 8.058594 19.492188v21.421875c0 12.089843 4.699219 23.453125 13.230469 32l2.328124 2.332031-10.878906 10.898438-65.796875 65.910156-3.667969-3.675782c-.039062-.035156-.074218-.074218-.113281-.109374l-.644531-.648438c-7.765625-7.777344-18.082031-12.453125-29.042969-13.164062-6.667969-.433594-12.941406-3.277344-17.6875-8.027344l-24.644531-24.511719c-2.9375-2.921875-7.6875-2.910156-10.609375.027344-2.917969 2.9375-2.90625 7.6875.03125 10.605469l24.628906 24.492187c7.300781 7.316406 17 11.714844 27.3125 12.382813 7.320313.472656 14.210938 3.597656 19.398438 8.792968l.363281.363282c.195312.222656.402344.429687.621094.625l3.457031 3.460937-.382813.386719c-6.171874 6.183594-6.171874 16.242187 0 22.425781l35.207032 35.269531c2.996094 3 6.976562 4.652344 11.214844 4.652344 4.234374 0 8.21875-1.652344 11.214843-4.652344l99.070313-99.242187c6.171875-6.183594 6.171875-16.242188 0-22.425781zm-64.582032-74.578126-.140624-.023437-1.367188-.277344zm-241.300781 101.941407c-4.722656 4.734375-10.996093 7.578125-17.660156 8.011719-10.964844.710937-21.28125 5.386718-29.046875 13.164062l-4.425781 4.433594-3.984375-3.992188c-.050782-.050781-.101563-.105468-.152344-.152344l-72.539062-72.664062 2.328124-2.332031c8.53125-8.546875 13.230469-19.910157 13.230469-32v-21.421875c0-7.363282 2.859375-14.285156 8.058594-19.492188l34.15625-34.210937c4.828125-4.839844 11.25-7.503907 18.078125-7.503907 4.378906 0 8.589844 1.101563 12.324219 3.167969l-19.265625 19.296875c-2.925782 2.929688-2.921875 7.679688.007812 10.605469 1.464844 1.460937 3.382813 2.191406 5.300782 2.191406 1.921874 0 3.84375-.734375 5.308593-2.199219l23.011719-23.054687v93.632813c0 14.125 11.476562 25.613281 25.582031 25.613281 3.976563 0 7.742188-.914063 11.101563-2.539063 1.523437 7.433594 6.273437 13.699219 12.710937 17.269532zm119.230469-105.636719c0 5.851562-4.75 10.613281-10.582031 10.613281-5.835938 0-10.582031-4.761719-10.582031-10.613281v-83.660156c0-4.140625-3.355469-7.5-7.5-7.5-4.144532 0-7.5 3.359375-7.5 7.5v124.78125c0 5.851562-4.746094 10.609375-10.582032 10.609375-5.238281 0-9.585937-3.835938-10.425781-8.855469v-126.621094c0-4.144531-3.355469-7.5-7.5-7.5-1.332031 0-2.585937.351563-3.671875.960938-2.371094 1.261718-3.984375 3.753906-3.984375 6.625v124.777344c0 .953124.054687 1.886718.15625 2.8125v15.113281c0 5.851562-4.746094 10.613281-10.582031 10.613281-5.832032 0-10.578125-4.761719-10.578125-10.613281v-142.878907c0-4.140624-3.359375-7.5-7.5-7.5-4.144531 0-7.503907 3.359376-7.503907 7.5v124.953126c0 5.851562-4.746093 10.613281-10.578124 10.613281-5.835938 0-10.582032-4.761719-10.582032-10.613281v-139.511719c0-4.144531-3.359375-7.503907-7.5-7.503907-4.144531 0-7.5 3.359376-7.5 7.503907v25.804687c-.628906.203125-1.238281.488282-1.804687.863282-9.699219-3.644532-16.621094-13.027344-16.621094-24.003907v-48.386719c0-7.363281 2.863281-14.285156 8.058594-19.492187l15.121093-15.148437c8.535157-8.546876 13.234376-19.910157 13.234376-32v-3.289063h15.078124c4.144532 0 7.5-3.359375 7.5-7.5 0-4.144531-3.355468-7.5-7.5-7.5h-31.234374c-.472657 0-.855469-.386719-.855469-.859375v-49.890625c0-.472656.382812-.859375.855469-.859375h140.09375c.476562 0 .859374.386719.859374.859375v49.890625c0 .476562-.382812.859375-.859374.859375h-73.648438c-4.140625 0-7.5 3.355469-7.5 7.5 0 4.140625 3.359375 7.5 7.5 7.5h58.136719v6.285156c0 11 3.988281 21.605469 11.234375 29.871094 4.414062 5.03125 6.847656 11.492187 6.847656 18.191406zm176.035156 90.101562-99.070312 99.242188c-.164063.167969-.363282.25-.597656.25-.230469 0-.429688-.082031-.597657-.25l-35.207031-35.269531c-.339844-.339844-.339844-.890625 0-1.230469l5.667969-5.679688s.003906-.003906.003906-.003906l57.511719-57.609375 35.886718-35.949219c.328126-.332031.863282-.332031 1.191407 0l35.210937 35.269532c.339844.339844.339844.890625 0 1.230468zm0 0"/><path d="m201.800781 32.804688c-4.402343 0-7.984375 3.589843-7.984375 8 0 4.414062 3.582032 8 7.984375 8 4.40625 0 7.988281-3.585938 7.988281-8 0-4.410157-3.582031-8-7.988281-8zm0 0"/><path d="m463.402344 374.6875c-4.40625 0-7.988282 3.589844-7.988282 8s3.582032 8 7.988282 8c4.402344 0 7.984375-3.589844 7.984375-8s-3.582031-8-7.984375-8zm0 0"/><path d="m124.984375 451.203125c0-4.410156-3.582031-8-7.984375-8-4.40625 0-7.988281 3.589844-7.988281 8s3.582031 8 7.988281 8c4.402344 0 7.984375-3.589844 7.984375-8zm0 0"/></svg>
            )
            
        }, 
        {
            title: "Projects Realisé",
            number: '6',
            sign:'+',
            number2:null,
            svg :(<svg  id="Capa_1" enableBackground="new 0 0 512 512" height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><g><path d="m474.427 30.108h-163.755c-4.151 0-7.515 3.365-7.515 7.515s3.364 7.515 7.515 7.515h163.754c12.43 0 22.544 10.113 22.544 22.544v263.007h-36.028l-.001-230.847c0-12.431-10.114-22.544-22.544-22.544h-364.795c-12.431 0-22.544 10.113-22.544 22.544v230.847h-36.029v-263.008c0-12.431 10.114-22.544 22.544-22.544h243.04c4.151 0 7.515-3.365 7.515-7.515s-3.364-7.515-7.515-7.515h-243.04c-20.718.001-37.573 16.856-37.573 37.574v303.848c0 20.718 16.855 37.573 37.573 37.573h165.231l-7.574 57.761h-26.702c-4.151 0-7.515 3.365-7.515 7.515s3.364 7.515 7.515 7.515h174.943c4.151 0 7.515-3.365 7.515-7.515s-3.364-7.515-7.515-7.515h-26.701l-7.574-57.761h79.629c4.151 0 7.515-3.365 7.515-7.515s-3.364-7.515-7.515-7.515h-351.252c-12.43 0-22.544-10.113-22.544-22.544v-25.811h481.941v25.811c0 12.431-10.114 22.544-22.544 22.544h-55.543c-4.151 0-7.515 3.365-7.515 7.515s3.364 7.515 7.515 7.515h55.543c20.718 0 37.573-16.855 37.573-37.573v-303.848c.001-20.718-16.854-37.573-37.572-37.573zm-172.815 436.755h-91.223l7.574-57.761h76.074zm-235.525-367.022c0-4.144 3.371-7.515 7.515-7.515h364.796c4.144 0 7.515 3.371 7.515 7.515v36.985h-379.826zm0 52.015h379.826v178.833h-36.534v-33.499c0-4.15-3.364-7.515-7.515-7.515h-127.875c-4.151 0-7.515 3.365-7.515 7.515v33.499h-20.949v-33.499c0-4.15-3.364-7.515-7.515-7.515h-127.874c-4.151 0-7.515 3.365-7.515 7.515v33.499h-36.534zm328.262 178.832h-112.845v-25.984h112.845zm-163.853 0h-112.845v-25.984h112.845z"/><path d="m94.748 102.455c-6.364 0-11.542 5.178-11.542 11.543s5.178 11.542 11.542 11.542 11.542-5.178 11.542-11.542c.001-6.364-5.177-11.543-11.542-11.543z"/><path d="m131.791 102.455c-6.364 0-11.542 5.178-11.542 11.543s5.178 11.542 11.542 11.542 11.542-5.178 11.542-11.542-5.178-11.543-11.542-11.543z"/><path d="m168.833 102.455c-6.364 0-11.542 5.178-11.542 11.543s5.178 11.542 11.542 11.542c6.365 0 11.543-5.178 11.543-11.542s-5.178-11.543-11.543-11.543z"/><path d="m110.136 271.332h54.669c4.151 0 7.515-3.365 7.515-7.515s-3.364-7.515-7.515-7.515h-47.155v-65.938h276.683v65.938h-199.47c-4.151 0-7.515 3.365-7.515 7.515s3.364 7.515 7.515 7.515h206.984c4.151 0 7.515-3.365 7.515-7.515v-80.967c0-4.15-3.364-7.515-7.515-7.515h-291.711c-4.151 0-7.515 3.365-7.515 7.515v80.968c0 4.15 3.364 7.514 7.515 7.514z"/></g></svg>)

        }, {
            title: "Heures Travaillées",
            number: '525',
            sign:'h',
            number2:null,
            svg: (<svg id="Capa_1" enableBackground="new 0 0 512 512" height="40" viewBox="0 0 512 512" width="40" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m497.23 458.584h-73.94v-9.089c0-9.248-7.524-16.772-16.771-16.772h-6.887l-2.182-21.425h81.093c11.386 0 20.649-9.263 20.649-20.65v-116.073c0-11.386-9.263-20.65-20.649-20.65h-209.743c-11.386 0-20.65 9.263-20.65 20.65v62.76c-16.631-5.453-39.588-9.074-53.126-10.89h-.001c-1.141-.153-1.997-1.133-1.993-2.28l.092-21.951c1.606-1.175 3.188-2.416 4.739-3.74 11.724-10.009 19.304-24.315 21.389-40.021 3.873-.57 7.451-2.351 10.283-5.16 3.506-3.476 5.449-8.111 5.469-13.049l.051-12.173c.022-5.238-2.148-10.117-5.863-13.579l.161-38.124c.064-15.181-12.203-27.592-27.368-27.721-3.844-10.912-14.198-18.274-25.771-18.323l-47.716-.201c-.078 0-.152 0-.23 0-29.541 0-53.639 23.972-53.764 53.541l-.127 30.176c-3.744 3.43-5.955 8.291-5.978 13.529l-.051 12.174c-.039 9.237 6.739 16.943 15.598 18.339 1.952 15.721 9.412 30.092 21.051 40.201 1.539 1.337 3.111 2.591 4.707 3.78l-.092 21.951c-.005 1.147-.87 2.12-2.012 2.264h-.001c-16.125 2.024-45.61 6.49-61.927 13.672-19.907 8.763-32.829 28.479-32.921 50.23l-.047 11.083c-.018 4.141 3.326 7.513 7.468 7.531h.032c4.127 0 7.482-3.337 7.499-7.468l.047-11.082c.067-15.834 9.474-30.186 23.965-36.566 6.233-2.744 15.047-5.089 24.118-7.007l25.658 33.63c6.241 8.181 16.774 10.725 25.629 7.443l6.045 8.857-9.598 62.184h-53.381l.11-26.071c.018-4.141-3.326-7.513-7.468-7.531-.011 0-.021 0-.032 0-4.127 0-7.482 3.337-7.499 7.468l-.11 26.134h-27.726l.094-22.304c.018-4.141-3.326-7.513-7.468-7.531-.011 0-.021 0-.032 0-4.127 0-7.482 3.337-7.499 7.468l-.095 22.512c-6.909.945-12.255 6.87-12.255 14.033v25.058c0 7.818 6.361 14.179 14.179 14.179h482.847c7.819 0 14.179-6.361 14.179-14.179v-25.058c0-7.818-6.36-14.179-14.179-14.179zm-88.94-9.089v9.089h-69.24v-9.089c0-.978.795-1.772 1.772-1.772h65.696c.978-.001 1.772.794 1.772 1.772zm-58.398-38.197-2.182 21.425h-6.888c-9.248 0-16.771 7.524-16.771 16.772v9.089h-35.01l.218-47.286zm12.895 21.425 2.867-28.152c0-.004.001-.007.001-.01l.952-9.342c.005-.052.048-.091.1-.091h13.927c.052 0 .095.039.1.091l.951 9.333c.001.01.002.02.003.03l2.866 28.143h-21.767zm-99.637-158.148c0-3.115 2.535-5.65 5.65-5.65h209.742c3.115 0 5.65 2.535 5.65 5.65v116.073c0 3.115-2.535 5.65-5.65 5.65h-82.62l-.265-2.6c-.788-7.737-7.246-13.571-15.022-13.571h-13.927c-7.777 0-14.235 5.834-15.022 13.571l-.265 2.6h-82.621c-3.116 0-5.65-2.535-5.65-5.65zm5.65 136.723h5.46l-.218 47.286h-27.719l.107-25.328c.018-4.141-3.326-7.513-7.468-7.531-.011 0-.021 0-.032 0-4.127 0-7.482 3.337-7.499 7.468l-.107 25.391h-53.419l-9.035-62.002 6.046-8.938c9.046 3.502 19.594.84 25.817-7.179l25.887-33.359c7.89 1.738 15.577 3.799 21.532 6.15v37.392c-.002 11.387 9.262 20.65 20.648 20.65zm-123.772-24.122-5.482-8.032 11.591-9.138 11.429 9.122-5.479 8.099zm50.654-45.501c3.891.544 8.914 1.295 14.429 2.237l-21.23 27.358c-2.537 3.268-7.269 3.868-10.54 1.256l-14.183-11.32zm-106.18-157.949c.09-21.321 17.464-38.604 38.766-38.604h.166l47.716.201c5.252.022 9.951 3.365 11.692 8.318 2.095 5.957 7.704 9.977 13.958 10.004 6.952.029 12.583 5.709 12.554 12.661l-.146 34.692c-4.956.405-8.899 1.275-11.996 2.3l.078-18.4c.058-13.714-10.997-24.875-24.72-24.932l-.211-.001c-3.695-.008-7.354.544-10.883 1.663-9.281 2.943-19.898 2.857-29.023-.122-3.521-1.149-7.178-1.74-10.866-1.755l-.211-.001c-.037 0-.073 0-.109 0-13.482 0-24.765 10.864-24.823 24.723l-.087 21.191-1.734.097c-3.388-2.483-7.081-3.866-10.235-4.635zm8.938 66.769c-.07-4.08-3.389-7.354-7.469-7.371l-4.152-.017c-1.923-.008-3.482-1.58-3.473-3.503l.051-12.173c.003-.838.293-1.526.698-2.061 1.966.293 4.919 1.022 7.104 2.835 2.219 1.842 5.028 2.758 7.902 2.606l6.459-.358c6.019-.335 10.754-5.32 10.78-11.349l.101-24.569c.023-5.556 4.6-9.836 9.866-9.786l.213.001c2.129.009 4.24.35 6.277 1.015 12.325 4.022 26.118 3.996 38.212.161 2.012-.639 4.096-.962 6.192-.962h.089l.212.001c5.429.022 9.81 4.437 9.787 9.869l-.117 27.563c-.016 3.832 2.252 7.271 5.779 8.763 1.198.507 2.455.753 3.702.753 2.431 0 4.818-.937 6.631-2.712 1.902-1.86 9.494-3.193 15.975-3.407.462.557.8 1.297.796 2.213l-.051 12.174c-.005 1.257-.648 2.082-1.032 2.461-.381.379-1.206 1.011-2.454 1.011-.005 0-.011 0-.016 0l-4.155-.018c-4.126-.02-7.424 3.229-7.529 7.307-.365 14.21-6.45 27.377-16.696 36.123-21.768 18.584-51.479 18.635-73.292-.31-10.171-8.83-16.145-22.047-16.39-36.26zm79.647 60.213-.056 13.393c-.014 3.365.96 6.533 2.648 9.224l-29.476 18.263-29.32-18.511c1.711-2.677 2.712-5.836 2.727-9.201l.056-13.394c16.724 7.092 35.68 7.573 53.421.226zm-64.672 60.295-21.048-27.588c5.522-.896 10.55-1.604 14.444-2.115l31.382 19.812-14.236 11.223c-3.261 2.569-8.005 1.993-10.542-1.332zm34.032 31.183 7.084.03 8.214 56.368h-24.004zm348.963 94.815h-481.207v-23.417h481.207z"/><path d="m373.671 352.368c15.638 0 28.36-12.722 28.36-28.36s-12.722-28.36-28.36-28.36-28.36 12.722-28.36 28.36 12.722 28.36 28.36 28.36zm0-41.721c7.367 0 13.361 5.994 13.361 13.361s-5.993 13.361-13.361 13.361-13.361-5.994-13.361-13.361 5.993-13.361 13.361-13.361z"/><path d="m416.56 52.039c-4.142 0-7.5 3.357-7.5 7.5v33.031c0 5.605 4.56 10.166 10.169 10.166l17.967-.007c4.142-.002 7.498-3.36 7.497-7.503-.001-4.141-3.359-7.497-7.5-7.497 0 0-.002 0-.003 0l-13.131.005v-28.195c.001-4.143-3.357-7.5-7.499-7.5z"/><path d="m416.56 190.471c52.513 0 95.236-42.723 95.236-95.235 0-52.513-42.723-95.236-95.236-95.236s-95.235 42.723-95.235 95.236 42.722 95.235 95.235 95.235zm0-175.472c44.242 0 80.236 35.995 80.236 80.237s-35.994 80.236-80.236 80.236-80.236-35.994-80.236-80.236 35.994-80.237 80.236-80.237z"/><path d="m416.56 164.223c38.039 0 68.987-30.947 68.987-68.986s-30.947-68.988-68.987-68.988c-31.119 0-57.445 20.608-66.033 48.963-1.201 3.964 1.039 8.151 5.003 9.351 3.964 1.199 8.151-1.04 9.352-5.004 6.833-22.557 28.084-38.311 51.678-38.311 29.769 0 53.987 24.219 53.987 53.988 0 29.768-24.219 53.987-53.987 53.987-23.784 0-44.504-15.243-51.561-37.93-1.23-3.955-5.432-6.167-9.389-4.933-3.955 1.229-6.164 5.433-4.934 9.388 9.019 28.994 35.496 48.475 65.884 48.475z"/></g></g></svg>)

        }, {
            title: "Disponibilité",
            number: '24',
            sign:'h',
            svg: (
                <svg height="40pt" viewBox="0 -8 512 512" width="40pt" xmlns="http://www.w3.org/2000/svg"><path d="m34.78125 389.703125c1.96875 0 3.898438-.800781 5.296875-2.199219 1.402344-1.402344 2.203125-3.332031 2.203125-5.300781 0-1.980469-.800781-3.910156-2.203125-5.3125-1.398437-1.386719-3.328125-2.1875-5.296875-2.1875-1.980469 0-3.910156.800781-5.3125 2.1875-1.390625 1.402344-2.199219 3.332031-2.199219 5.3125 0 1.96875.808594 3.898437 2.199219 5.300781 1.402344 1.398438 3.332031 2.199219 5.3125 2.199219zm0 0"/><path d="m499.5 200.503906h-44.550781c-6.890625 0-12.5 5.605469-12.5 12.5v3.5625h-21.605469c-6.894531 0-12.5 5.605469-12.5 12.5v15.480469h-117.550781c-6.496094 0-12.601563 2.539063-17.195313 7.144531l-3.175781 3.183594-.796875-.796875c-5.421875-5.4375-15.03125-9.546875-22.371094-9.558594h-143.601562v-15.457031c0-6.890625-5.605469-12.5-12.5-12.5h-21.601563v-3.5625c0-6.890625-5.609375-12.5-12.5-12.5h-44.550781c-6.894531 0-12.5 5.609375-12.5 12.5v192.625c0 6.890625 5.605469 12.5 12.5 12.5h44.550781c6.890625 0 12.5-5.605469 12.5-12.5v-3.5625h21.605469c6.890625 0 12.5-5.609375 12.5-12.5v-6.054688l9.015625 6.449219c-.585937 7.347657 1.847656 14.816407 7.351563 20.339844 4.804687 4.816406 11.257812 7.472656 18.175781 7.472656.179687 0 .359375-.011719.539062-.015625-.144531 6.832032 2.320313 13.644532 7.4375 18.773438 4.800781 4.820312 11.253907 7.472656 18.171875 7.472656.179688 0 .359375-.011719.542969-.011719-.148437 6.828125 2.320313 13.644531 7.429687 18.773438 4.804688 4.816406 11.257813 7.46875 18.175782 7.46875.179687 0 .359375-.007813.539062-.011719-.144531 6.832031 2.324219 13.644531 7.4375 18.773438 4.800782 4.816406 11.253906 7.472656 18.171875 7.472656 7.191407 0 13.976563-2.835938 19.101563-7.976563l1.769531-1.777343c4.164063 2.445312 8.921875 3.753906 13.890625 3.753906 7.359375 0 14.257812-2.859375 19.429688-8.046875l2.273437-2.277344c3.507813-3.523437 5.859375-7.769531 7.066406-12.261719 3.929688 2.105469 8.351563 3.222656 12.949219 3.222656 7.355469 0 14.257812-2.859374 19.429688-8.046874l2.273437-2.28125c3.363281-3.371094 5.664063-7.410157 6.914063-11.695313 4.34375 2.757813 9.390624 4.238281 14.679687 4.238281 7.355469 0 14.257813-2.855468 19.429687-8.046875l2.269532-2.277343c3.824218-3.835938 6.273437-8.527344 7.363281-13.46875 3.191406 1.269531 6.625 1.9375 10.167969 1.9375 7.359375 0 14.257812-2.859376 19.433594-8.046876l2.269531-2.277343c9.398437-9.425781 10.539062-24.046875 3.421875-34.734375l7.566406-4.269532v7.429688c0 6.894531 5.605469 12.5 12.5 12.5h21.605469v3.566406c0 6.890625 5.609375 12.5 12.5 12.5h44.550781c6.894531 0 12.5-5.609375 12.5-12.5v-192.625c0-6.894531-5.605469-12.5-12.5-12.5zm-444.949219 202.621094h-39.550781v-187.621094h39.550781zm83.648438-.355469c-2.902344 0-5.582031-1.089843-7.550781-3.0625-4.300782-4.3125-4.074219-11.554687.503906-16.148437l3.320312-3.332032c2.292969-2.296874 5.304688-3.566406 8.480469-3.566406 2.902344 0 5.582031 1.089844 7.550781 3.0625 4.300782 4.3125 4.074219 11.554688-.503906 16.144532l-3.324219 3.335937c-2.289062 2.300781-5.300781 3.566406-8.476562 3.566406zm26.148437 26.230469c-2.902344 0-5.582031-1.085938-7.550781-3.0625-4.300781-4.308594-4.074219-11.554688.503906-16.144531l3.324219-3.335938c2.289062-2.296875 5.304688-3.5625 8.480469-3.5625 2.902343 0 5.582031 1.085938 7.546875 3.054688 4.296875 4.316406 4.074218 11.558593-.503906 16.152343l-3.324219 3.332032c-2.289063 2.300781-5.300781 3.566406-8.476563 3.566406zm26.148438 26.230469c-2.902344 0-5.585938-1.085938-7.550782-3.058594-4.296874-4.3125-4.074218-11.554687.5-16.144531 0-.003906.003907-.003906.003907-.003906l3.324219-3.335938s0 0 .003906-.003906c2.289062-2.296875 5.300781-3.5625 8.472656-3.5625 2.902344 0 5.585938 1.089844 7.550781 3.0625 4.300781 4.3125 4.074219 11.554687-.503906 16.148437l-3.324219 3.332031c-2.289062 2.300782-5.300781 3.566407-8.476562 3.566407zm34.625 22.667969c-2.289063 2.296874-5.300782 3.566406-8.476563 3.566406-2.902343 0-5.582031-1.085938-7.550781-3.0625-4.296875-4.3125-4.070312-11.554688.503906-16.144532l3.324219-3.335937c2.292969-2.300781 5.304687-3.566406 8.480469-3.566406 2.902344 0 5.582031 1.085937 7.550781 3.0625 4.296875 4.3125 4.070313 11.554687-.503906 16.144531zm161.613281-67.355469-2.273437 2.28125c-2.335938 2.34375-5.464844 3.636719-8.808594 3.636719-3.339844 0-6.46875-1.292969-8.804688-3.636719l-58.609375-58.8125c-2.925781-2.933594-7.675781-2.941407-10.609375-.015625-2.933594 2.921875-2.941406 7.671875-.015625 10.605468l49.886719 50.058594c4.875 4.894532 4.875 12.851563 0 17.742188l-2.273438 2.277344c-2.335937 2.347656-5.464843 3.636718-8.804687 3.636718-3.34375 0-6.472656-1.289062-8.808594-3.636718l-57.648437-57.828126c-2.921875-2.933593-7.671875-2.941406-10.605469-.015624-2.933594 2.921874-2.941406 7.671874-.015625 10.605468l44.609375 44.753906.25.25c4.875 4.890626 4.875 12.847657 0 17.738282l-2.269531 2.277344c-2.339844 2.347656-5.46875 3.636718-8.808594 3.636718-3.34375 0-6.472656-1.289062-8.808594-3.636718l-62.835937-63.035157c-2.925781-2.933593-7.671875-2.941406-10.609375-.019531-2.933594 2.925781-2.9375 7.671875-.015625 10.605469l51.628906 51.796875c4.875 4.890625 4.875 12.847656 0 17.738281l-2.269531 2.277344c-2.339844 2.347656-5.46875 3.636719-8.808594 3.636719-2 0-3.917969-.46875-5.640625-1.34375 2.859375-9.066407.816406-19.261719-6.191406-26.292969-4.800781-4.816407-11.257813-7.46875-18.171875-7.46875-.183594 0-.363282.007812-.542969.011719.148437-6.832032-2.320313-13.644532-7.433594-18.773438-4.804687-4.820312-11.257812-7.472656-18.175781-7.472656-.179688 0-.359375.011718-.539062.011718.144531-6.828124-2.320313-13.644531-7.433594-18.773437-4.800782-4.816406-11.257813-7.46875-18.171875-7.46875-.183594 0-.363281.007813-.542969.011719.148438-6.832032-2.320312-13.644532-7.433594-18.773438-4.804687-4.816406-11.257812-7.472656-18.175781-7.472656-7.191406 0-13.972656 2.832031-19.101563 7.980469l-3.324218 3.332031c-.8125.8125-1.554688 1.671875-2.242188 2.558594l-14.628906-10.464844v-17.832031c0-4.140625-3.359375-7.5-7.5-7.5-4.144531 0-7.5 3.359375-7.5 7.5v39.832031h-19.105469v-155.496094h19.105469v79.664063c0 4.144531 3.355469 7.5 7.5 7.5 4.140625 0 7.5-3.355469 7.5-7.5v-51.707031h143.589844c3.347656.003906 9.171875 2.550781 11.757812 5.144531l.828125.832031-53.207031 53.375c-5.582031 5.601562-8.738281 13.015625-8.890625 20.878906-.148437 7.957032 2.804687 15.382813 8.3125 20.910156 5.367187 5.378907 12.582031 8.34375 20.3125 8.34375 8.058594 0 15.660156-3.175781 21.402344-8.941406l18.199219-18.253906c6.964843 4.007812 14.9375 6.167969 23.03125 6.167969 12.328124 0 23.917968-4.8125 32.628906-13.554688l3.460937-3.472656 61.652344 61.851563c4.875 4.890624 4.875 12.847656 0 17.738281zm36.609375-23.480469v-68.832031c0-4.140625-3.359375-7.5-7.5-7.5s-7.5 3.359375-7.5 7.5v46.679687l-18.074219 10.195313-54.597656-54.773438 8.132813-8.15625c2.921874-2.933593 2.914062-7.683593-.019532-10.605469-2.933594-2.925781-7.683594-2.917968-10.605468.015626l-22.183594 22.253906c-5.875 5.894531-13.691406 9.144531-22.003906 9.144531-6.992188 0-13.847657-2.386719-19.304688-6.722656-2.988281-2.375-7.28125-2.125-9.976562.574219l-22.570313 22.644531c-2.910156 2.917969-6.738281 4.527343-10.78125 4.527343-3.71875 0-7.160156-1.398437-9.691406-3.933593-2.609375-2.621094-4.007813-6.1875-3.9375-10.039063.078125-3.96875 1.683593-7.726562 4.519531-10.574218l66.972656-67.179688c1.753906-1.761719 4.089844-2.734375 6.570313-2.734375h117.550781v22.683594c0 4.144531 3.355469 7.5 7.5 7.5 4.140625 0 7.5-3.355469 7.5-7.5v-50.664063h19.105469v155.496094zm73.65625 16.0625h-39.550781v-187.621094h39.550781zm0 0"/><path d="m477.230469 389.703125c1.96875 0 3.898437-.800781 5.300781-2.199219 1.390625-1.402344 2.1875-3.332031 2.1875-5.300781 0-1.980469-.796875-3.910156-2.1875-5.3125-1.402344-1.386719-3.332031-2.1875-5.300781-2.1875-1.980469 0-3.910157.800781-5.308594 2.1875-1.402344 1.402344-2.203125 3.332031-2.203125 5.3125 0 1.96875.800781 3.898437 2.203125 5.300781 1.398437 1.398438 3.328125 2.199219 5.308594 2.199219zm0 0"/><path d="m256 233.027344c15.464844 0 30.625-4.171875 43.84375-12.058594 3.554688-2.125 4.71875-6.726562 2.597656-10.285156-2.125-3.554688-6.726562-4.71875-10.285156-2.597656-10.894531 6.503906-23.398438 9.941406-36.15625 9.941406-39.066406 0-70.851562-31.894532-70.851562-71.101563 0-39.203125 31.785156-71.101562 70.851562-71.101562s70.851562 31.898437 70.851562 71.101562c0 12.875-3.464843 25.484375-10.011718 36.464844-2.125 3.554687-.960938 8.160156 2.597656 10.28125s8.160156.960937 10.28125-2.597656c7.9375-13.304688 12.132812-28.570313 12.132812-44.148438 0-47.476562-38.511718-86.101562-85.851562-86.101562s-85.851562 38.625-85.851562 86.101562c0 47.476563 38.511718 86.101563 85.851562 86.101563zm0 0"/><path d="m230.140625 135.585938v-8.089844c0-4.140625-3.355469-7.5-7.5-7.5-4.140625 0-7.5 3.359375-7.5 7.5v8.089844c0 4.144531 3.359375 7.5 7.5 7.5 4.144531 0 7.5-3.355469 7.5-7.5zm0 0"/><path d="m296.859375 135.585938v-8.089844c0-4.140625-3.355469-7.5-7.5-7.5-4.140625 0-7.5 3.359375-7.5 7.5v8.089844c0 4.144531 3.359375 7.5 7.5 7.5 4.144531 0 7.5-3.355469 7.5-7.5zm0 0"/><path d="m256 191.671875c17.890625 0 32.449219-13.363281 32.449219-29.789063 0-4.140624-3.359375-7.5-7.5-7.5s-7.5 3.359376-7.5 7.5c0 8.152344-7.828125 14.789063-17.449219 14.789063s-17.449219-6.636719-17.449219-14.789063c0-4.140624-3.359375-7.5-7.5-7.5-4.144531 0-7.5 3.359376-7.5 7.5 0 16.425782 14.554688 29.789063 32.449219 29.789063zm0 0"/><path d="m380.910156 102.660156c28.230469 0 51.191406-23.023437 51.191406-51.328125 0-7.644531-1.683593-14.894531-4.6875-21.417969l6.421876-6.441406c2.925781-2.933594 2.917968-7.683594-.015626-10.609375-2.933593-2.921875-7.683593-2.914062-10.605468.019531l-4.199219 4.210938c-9.378906-10.484375-22.984375-17.09375-38.101563-17.09375-28.226562 0-51.191406 23.027344-51.191406 51.328125 0 28.304687 22.960938 51.332031 51.1875 51.332031zm0-87.660156c10.992188 0 20.847656 4.953125 27.492188 12.742188l-27.492188 27.578124-15.972656-16.027343c-2.921875-2.933594-7.671875-2.9375-10.605469-.015625-2.933593 2.921875-2.941406 7.671875-.019531 10.605468l19.167969 19.230469c1.984375 1.988281 4.621093 3.082031 7.429687 3.082031 2.8125 0 5.449219-1.09375 7.429688-3.082031l27.429687-27.519531c.863281 3.101562 1.332031 6.367188 1.332031 9.738281 0 20.03125-16.234374 36.328125-36.191406 36.328125-19.957031 0-36.191406-16.296875-36.191406-36.328125.003906-20.03125 16.238281-36.332031 36.191406-36.332031zm0 0"/><path d="m81.742188 101.730469-2.648438 15.449219c-.863281 5.027343 1.164062 10.011718 5.289062 13.011718 2.289063 1.660156 4.992188 2.539063 7.820313 2.539063 2.148437 0 4.289063-.527344 6.191406-1.527344l13.875-7.292969 13.871094 7.292969c1.902344 1 4.042969 1.527344 6.191406 1.527344 2.824219 0 5.53125-.875 7.820313-2.539063 4.125-3 6.152344-7.984375 5.292968-13.011718l-2.648437-15.445313 11.222656-10.941406c3.652344-3.558594 4.941407-8.785157 3.363281-13.640625-1.574218-4.847656-5.691406-8.316406-10.738281-9.050782l-15.511719-2.253906-6.933593-14.058594c-2.257813-4.570312-6.832031-7.414062-11.929688-7.414062-5.101562 0-9.671875 2.84375-11.929687 7.417969l-6.9375 14.054687-15.511719 2.253906c-5.046875.734376-9.160156 4.203126-10.738281 9.054688-1.574219 4.851562-.285156 10.078125 3.367187 13.636719zm17.71875-21.605469c2.441406-.355469 4.554687-1.890625 5.644531-4.105469l7.160156-14.507812 7.160156 14.507812c1.09375 2.214844 3.207031 3.75 5.648438 4.105469l16.011719 2.324219-11.585938 11.292969c-1.769531 1.722656-2.574219 4.207031-2.15625 6.640624l2.734375 15.945313-14.320313-7.53125c-1.09375-.574219-2.292968-.859375-3.492187-.859375-1.195313 0-2.394531.285156-3.488281.859375l-14.320313 7.53125 2.734375-15.945313c.417969-2.433593-.386718-4.917968-2.15625-6.640624l-11.585937-11.292969zm0 0"/></svg>
            )

        },
    ]

    return (

        <div className="lg:flex lg:flex-row w-full h-full justify-center items-center px-10 pb-28 pt-10 tilt3d md:grid  bg-static gap-20 md:justify-center    md:grid-cols-2  sm:flex-col sm:flex  sm:justify-around sm:h-full sm:flex ">
           
            {
                statices.map((item,index )=> (
                    <StaticCard item={item} key={index}/>
                    ))
                }
         </div>
    )
}

export default StaticSection;



// creating one Statice card 


const StaticCard = ({item}) => {
    return (
        <div className="flex gap-3 mt-10  "> 
        <div className="  flex items-center justify-center bg-white rounded-xl  h-20 w-24  rounded-tr-md rounded-bl-md">
            {item.svg}
        </div>
        <div className="flex flex-col gap-3">
            <p className=' font-bold to-blue-600  text-5xl ' >
                {/* {item.number} */}
                <CountUp end={item.number} duration={6} />
                {item.sign}
                

            </p>
            <p
            className=' text-md to-blue-600   '
            >{item.title}</p>
        </div>
        
        </div>
    )
}
