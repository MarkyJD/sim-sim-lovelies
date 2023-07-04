import * as React from "react";
import { Link } from "gatsby";

export default function PuppiesForSale() {
  return (
    <div className="pb-10 mt-40 md:mt-48 flex justify-center relative bg-gray-200">
      <div className="w-full flex flex-col items-center px-5">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0"
          y="0"
          className="h-52 md:h-64 lg:80 w-auto z-10 -translate-y-32 lg:-translate-y-40 -mb-24 md:-mb-28"
          viewBox="0, 0, 117, 115"
        >
          <g id="Layer_1">
            <path
              d="M76.913,97.875 L75.722,100.036 L77.112,102.979 L75.524,105.536 L75.325,107.889 L73.803,109.331 L70.895,110.115 L68.424,109.901 L64.544,109.069 L65.153,105.745 L66.705,100.854 L66.978,97.448 L69.212,92.413 L67.985,89.139 L68.735,83.678 L71.933,77.762 L73.654,76.75 L75.038,74.022 L77.423,72.62 L79.786,74.115 L81.341,76.197 L80.633,79.15 L80.066,82.147 L79.535,84.726 L77.31,87.861 L78.301,90.61 L76.715,94.145 L76.913,97.875"
              fill="#BC896B"
            />
            <path
              d="M76.913,97.875 L75.722,100.036 L77.112,102.979 L75.524,105.536 L75.325,107.889 L73.803,109.331 L70.895,110.115 L68.424,109.901 L64.544,109.069 L65.153,105.745 L66.705,100.854 L66.978,97.448 L69.212,92.413 L67.985,89.139 L68.735,83.678 L71.933,77.762 L73.654,76.75 L75.038,74.022 L77.423,72.62 L79.786,74.115 L81.341,76.197 L80.633,79.15 L80.066,82.147 L79.535,84.726 L77.31,87.861 L78.301,90.61 L76.715,94.145 L76.913,97.875 z"
              fillOpacity="0"
              stroke="#1A1919"
              strokeWidth="1.701"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M76.913,97.875 L75.722,100.036 L77.112,102.979 L75.524,105.536 L75.325,107.889 L73.803,109.331 L70.895,110.115 L68.424,109.901 L64.544,109.069 L65.153,105.745 L66.705,100.854 L66.978,97.448 L69.212,92.413 L67.985,89.139 L68.735,83.678 L71.933,77.762 L73.654,76.75 L75.038,74.022 L77.423,72.62 L79.786,74.115 L81.341,76.197 L80.633,79.15 L80.066,82.147 L79.535,84.726 L77.31,87.861 L78.301,90.61 L76.715,94.145 L76.913,97.875 z M72.553,105.041 C71.872,105.474 71.311,105.864 71.053,106.791 C70.951,107.163 70.582,108.016 70.678,108.416 C70.824,109.024 70.476,109.295 70.553,109.791"
              fillOpacity="0"
              stroke="#1A1919"
              strokeWidth="1.417"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M34.247,100.524 L35.437,102.708 L32.063,106.874 L31.553,110.291 L32.856,111.835 L34.842,111.637 L36.231,113.026 L37.818,112.63 L39.406,114.018 L42.184,113.424 L46.153,113.026 L46.549,111.241 L48.337,109.852 L47.145,107.073 L48.505,104.8 L47.543,103.302 L48.535,101.12 L46.749,96.555 L47.741,94.372 L46.352,92.586 L48.303,90.543 L47.656,88.448 L49.725,88.817 L49.858,86.832 L52.106,89.212 L54.091,86.038 L55.282,88.618 L57.862,87.824 L56.671,91.395 L58.258,92.984 L56.472,95.563 L57.465,97.151 L55.282,99.532 L56.274,101.318 L54.29,103.7 L54.489,105.881 L52.504,108.793 L53.033,111.704 L55.084,113.623 L57.862,113.424 L61.038,113.821 L63.616,113.424 L65.205,111.835 L67.387,110.645 L67.189,106.081 L69.174,104.692 L67.586,100.327 L68.975,98.143 L68.776,95.166 L70.364,93.579 L68.578,90.801 L69.698,88.021 L71.818,88.682 L73.406,85.774 L74.73,87.625 L77.31,85.839 L79.493,87.228 L81.081,84.252 L82.868,85.045 L85.049,81.671 L87.28,81.987 L86.239,84.649 L87.828,86.434 L86.428,91.291 L88.622,92.189 L86.637,96.159 L87.63,97.547 L84.454,100.524 L84.851,101.913 L83.065,103.5 L82.006,106.542 L83.858,109.852 L85.579,109.588 C85.579,109.588 87.552,110.575 87.687,110.642 C87.465,110.531 91.499,110.062 91.604,110.049 C95.846,109.553 98.075,106.828 97.551,102.906 L98.941,100.723 L98.544,97.547 L100.131,95.761 L99.934,91.991 L103.108,89.212 L102.712,86.434 L105.292,82.465 L104.696,78.297 L106.68,78.1 L107.474,74.528 L109.061,73.138 L107.276,68.177 L108.465,64.803 L106.085,62.025 L106.879,59.643 L104.895,57.461 L104.696,53.69 L107.276,53.094 L107.078,50.514 L110.637,51.042 L109.657,47.539 L112.436,47.339 L112.237,43.768 C112.237,43.768 115.803,44.542 115.303,43.542 C114.803,42.541 111.641,41.188 111.641,41.188 L111.245,38.806 L108.665,40.989 L107.078,39.401 L104.498,42.378 L101.521,41.386 L98.941,47.539 L95.587,44.941 L93.506,47.344 L91.831,45.022 L89.614,45.753 L88.35,44.217 L85.52,44.883 L83.383,42.182 L80.276,44.197 L78.171,44.209 L75.761,42.125 L72.547,43.557 L70.053,44.041 L63.303,46.542 L60.325,42.126 L55.901,42.1 L52.042,39.35 L49.526,41.276 L47.123,41.966 L43.264,46.983 L37.848,50.645 L37.351,56.077 L36.138,61.163 L30.674,65.003 L30.079,70.757 L32.262,70.956 L30.674,77.107 L32.46,77.504 L30.475,82.069 L32.659,82.665 L31.27,86.832 L33.452,88.022 L33.188,92.387 L36.032,93.778 L33.849,97.151 L36.231,97.944 L34.247,100.524"
              fill="#D79F7E"
            />
            <path
              d="M35.437,71.549 C35.954,71.867 39.406,73.336 39.406,73.336 L39.803,70.757 L44.368,74.725 C44.368,74.725 44.632,71.352 45.161,70.559 C46.483,71.088 47.743,72.344 49.725,73.536 C50.519,72.012 51.71,69.301 52.239,68.044 C52.241,68.083 53.615,70.438 54.091,70.559 C55.282,68.971 56.833,66.051 57.266,64.605 C57.809,64.837 59.251,67.78 59.251,67.78 L62.029,63.414 C62.029,63.414 64.3,64.569 64.941,64.605 C64.975,64.047 65.865,60.769 66.262,59.842 C66.925,60.372 69.411,61.127 69.372,60.436 C69.296,59.057 66.36,55.791 66.592,54.682 C68.557,54.867 71.292,56.467 72.482,57.065 C72.482,55.079 72.215,54.682 71.555,52.102 C72.225,52.016 77.112,54.153 77.112,54.153 L78.169,49.788 L81.875,52.566 L83.858,49.125 L88.885,48.2 L81.875,42.378 L72.547,43.557 L70.053,44.542 L63.553,46.042 L60.325,42.126 L55.901,42.1 L52.042,39.35 L49.526,41.276 L47.123,41.966 L43.264,46.983 L37.848,50.645 C37.685,52.434 37.678,54.313 37.351,56.079 C37.008,57.92 35.872,60.42 34.486,61.7 C33.442,62.662 31.203,62.337 30.587,63.885 C29.783,65.914 30.085,68.669 30.159,70.809 C30.756,70.909 31.374,71.057 31.95,71.243 C32.332,72.878 29.282,76.065 29.303,77.792 C29.609,77.764 31.677,76.956 31.984,76.931 C32.062,78.645 30.883,79.901 30.807,81.791 C30.805,81.844 32.485,82.766 32.641,82.893 C31.542,84.653 30.806,85.807 31.303,88.042 C32.585,88.216 32.772,88.35 33.522,87.555 C33.262,87.831 33.02,91.45 33.055,92.125 C33.589,91.598 35.546,93.994 36.231,93.379 C36.424,93.206 35.355,91.631 35.239,90.801 C35.11,89.879 36.926,89.893 37.223,89.609 C36.483,88.696 35.304,85.905 35.304,85.905 C35.304,85.905 36.495,85.506 37.422,85.243 C37.215,85.387 35.901,81.906 35.834,81.538 C36.096,81.491 37.553,80.084 37.553,80.084 C37.553,80.084 35.103,77.971 35.437,77.901 C36.172,77.747 37.485,76.657 38.215,76.512 C38.288,74.901 35.138,73.133 35.437,71.549"
              fill="#BC896B"
            />
            <path
              d="M34.247,100.524 L35.437,103.302 C35.437,103.302 30.803,108.041 31.553,110.291 C32.303,112.541 32.856,111.835 32.856,111.835 L34.842,111.637 L36.231,113.026 L37.818,112.63 L39.406,114.018 L42.184,113.424 L46.153,113.026 L48.337,109.852 L47.543,107.272 L48.535,105.088 L47.543,102.906 L48.535,101.318 L46.749,96.555 L47.741,94.372 L46.352,92.586 L48.303,90.543 L47.656,88.448 L49.725,88.817 L49.858,86.832 L52.106,89.212 L54.091,86.038 L55.282,88.618 L57.862,87.824 L56.671,91.395 L58.258,92.984 L56.472,95.563 L57.465,97.151 L55.282,99.532 L56.274,101.318 L54.29,103.7 L54.489,105.881 L52.504,108.793 L53.033,111.704 L55.084,113.623 L59.553,114.291 L63.616,113.424 L65.205,111.835 L67.387,110.645 L67.189,106.081 L69.174,104.692 L67.586,100.327 L68.975,98.143 L68.776,95.166 L70.364,93.579 L68.578,90.801 L69.698,88.021 L71.818,88.682 L73.406,85.774 L74.73,87.625 L77.31,85.839 L79.493,87.228 L81.081,84.252 L82.868,85.045 L85.049,81.671 L87.28,81.987 L86.239,84.649 L87.828,86.434 C87.828,86.434 87.553,89.667 86.553,91.417 C86.896,92.356 88.622,92.189 88.622,92.189 L86.637,96.159 L87.63,97.547 L84.454,100.524 L84.851,101.913 L83.065,103.5 L82.006,106.542 C82.006,106.542 83.858,109.852 83.859,109.852 C84.979,109.68 86.171,110.36 87.678,110.541 C90.35,110.863 93.483,110.666 95.171,108.859 L97.949,105.881 L97.551,102.906 L98.941,100.723 L98.544,97.547 L100.131,95.761 L99.934,91.991 L103.108,89.212 L102.712,86.434 L105.292,82.465 L104.696,78.297 L106.68,78.1 L107.474,74.528 C107.474,74.528 107.803,73.542 109.553,74.292 C110.303,71.792 107.276,68.177 107.276,68.177 C107.276,68.177 108.053,66.291 109.303,65.792 C108.141,63.78 106.085,62.025 106.085,62.025 L106.879,59.643 L104.895,57.461 L104.498,53.491 L107.276,53.094 L107.078,50.514 C107.078,50.514 109.053,50.292 110.303,51.542 C111.053,49.792 109.657,47.539 109.657,47.539 C109.657,47.539 111.553,47.542 113.053,48.541 C113.803,46.542 112.237,43.768 112.237,43.768 C112.237,43.768 114.053,44.041 115.303,44.041 C115.053,41.292 111.641,41.188 111.641,41.188 L111.245,38.806 L108.665,40.989 C108.665,40.989 107.553,39.792 106.303,38.792 C105.803,40.792 104.553,41.791 104.553,41.791 C104.553,41.791 102.553,43.291 101.521,41.386 C99.803,43.542 98.941,47.737 98.941,47.737 L95.587,44.941 L93.506,47.344 L91.831,45.022 L89.614,45.753 L88.35,44.217 L85.52,44.883 L83.383,42.182 L80.276,44.197 L78.171,44.209 L75.761,42.125 L72.547,43.557 L70.053,44.292 L65.553,45.541 L60.325,42.126 L55.901,42.1 L52.042,39.35 L49.526,41.276 L47.123,41.966 L43.264,46.983 L37.848,50.645 L37.351,56.077 L36.138,61.163 L30.674,65.003 L30.079,70.757 L32.262,70.956 C32.262,70.956 28.803,76.041 29.553,78.042 C32.303,77.292 32.46,77.504 32.46,77.504 L30.475,82.069 L32.659,82.665 C32.659,82.665 30.52,87.332 30.803,88.792 C33.303,88.042 33.452,88.022 33.452,88.022 L33.188,92.387 L36.032,93.778 L33.849,97.151 L36.231,97.944 L34.247,100.524 z"
              fillOpacity="0"
              stroke="#1A1919"
              strokeWidth="1.417"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.585,5.864 L17.776,8.642 L9.837,11.62 L11.821,13.801 L5.471,21.542 L7.456,22.732 L2.891,29.479 L4.677,30.075 L0.709,38.608 L3.089,39.204 L3.289,46.942 L6.067,45.553 L8.182,47.803 L10.565,45.819 L12.813,50.118 L13.012,46.942 L17.776,48.333 C17.606,46.232 16.605,41.567 19.747,40.987 C22.174,40.538 21.387,42.526 20.358,43.566 C20.811,44.026 21.282,44.497 21.744,44.959 L19.561,48.53 L21.744,49.721 L19.362,54.483 L22.118,55.904 L21.346,59.842 L24.126,60.635 C24.126,60.635 23.636,65.875 24.969,66.542 C26.303,64.542 28.094,64.605 28.094,64.605 L29.88,68.177 L32.46,66.588 L36.032,69.566 L39.969,66.375 L41.969,69.542 L45.36,66.788 L48.138,68.838 L50.784,64.208 L53.496,65.2 L54.686,61.034 L57.663,62.422 L58.303,58.875 L61.803,60.208 L62.969,54.876 L65.303,54.876 L62.823,47.539 L65.403,48.133 L64.212,42.18 L66.659,40.394 L66.131,38.806 L68.776,40.527 L68.578,46.049 L71.852,44.165 L73.936,48.927 L76.913,45.753 L78.104,47.737 L80.684,44.959 L84.057,46.744 L86.042,41.981 L88.622,41.188 L87.034,37.02 C87.034,37.02 89.303,35.542 90.637,36.207 C90.97,34.042 85.645,28.883 85.645,28.883 C85.645,28.883 88.303,28.042 88.969,27.876 C89.137,26.208 83.66,21.74 83.66,21.74 L86.137,20.876 L79.692,15.786 L79.295,12.61 L74.928,9.833 L75.722,7.649 L70.96,5.268 L68.38,1.499 L65.403,4.077 L63.616,1.696 L60.243,4.475 L54.489,1.696 L54.686,4.077 L49.329,0.704 L48.337,2.688 L41.391,0.506 L42.184,3.68 L36.231,1.894 L37.62,5.666 L32.46,3.284 L29.88,8.642 L28.492,4.475 L25.714,5.268 L23.53,2.49 L22.14,5.864 L16.585,5.864"
              fill="#D79F7E"
            />
            <path
              d="M16.585,5.864 L17.776,8.642 L9.837,11.62 L11.821,13.801 L5.471,21.542 L7.456,22.732 L2.891,29.479 L4.677,30.075 L0.709,38.608 L3.089,39.204 L3.289,46.942 L6.067,45.553 L7.919,48.067 L10.3,45.686 L12.813,50.118 L13.012,46.942 L17.776,48.333 L18.899,42.378 L21.346,42.577 C21.751,41.825 23.133,39.799 23.133,39.799 L21.942,36.624 L25.118,32.852 L24.018,29.72 L25.911,26.7 C25.911,26.7 23.001,25.182 22.713,24.325 C23.926,22.732 25.255,20.374 26.507,19.358 C25.729,19.215 24.262,18.669 23.53,18.366 C25.316,16.183 26.837,14.728 28.424,13.139 C27.234,13.272 27.102,13.139 26.044,13.008 C27.432,12.213 28.887,9.17 29.88,9.17 C29.483,7.583 29.514,6.698 28.293,4.475 L25.714,4.672 L23.53,2.49 L22.14,5.864 L16.585,5.864"
              fill="#D79F7E"
            />
            <path
              d="M16.585,5.864 L17.776,8.642 L9.837,11.62 L11.821,13.801 L5.471,21.542 L7.456,22.732 L2.891,29.479 L4.677,30.075 L0.709,38.608 L3.089,39.204 L3.289,46.942 L6.067,45.553 L7.919,48.067 L10.3,45.686 L12.813,50.118 L13.012,46.942 L17.776,48.333 L18.899,42.378 L21.346,42.577 C21.751,41.825 23.133,39.799 23.133,39.799 L21.942,36.624 L25.118,32.852 L24.018,29.72 L25.911,26.7 C25.911,26.7 23.001,25.182 22.713,24.325 C23.926,22.732 25.255,20.374 26.507,19.358 C25.729,19.215 24.262,18.669 23.53,18.366 C25.316,16.183 26.837,14.728 28.424,13.139 C27.234,13.272 27.102,13.139 26.044,13.008 C27.432,12.213 28.887,9.17 29.88,9.17 C29.483,7.583 29.514,6.698 28.293,4.475 L25.714,4.672 L23.53,2.49 L22.14,5.864 L16.585,5.864"
              fill="#BC896B"
            />
            <path
              d="M24.969,55.708 C25.303,57.708 25.303,58.875 27.137,60.375 C27.553,60 27.636,59.208 28.469,58.375 C29.637,60.375 31.97,61.042 33.137,60.875 C35.59,60.524 36.637,59.042 38.137,60.875 C39.969,60.542 40.324,58.016 40.969,57.708 C42.136,58.042 42.927,59.206 43.303,59.708 C44.303,57.208 47.469,55.708 46.303,53.542"
              fill="#D79F7E"
            />
            <path
              d="M24.969,55.708 C25.303,57.708 25.303,58.875 27.137,60.375 C27.553,60 27.636,59.208 28.469,58.375 C29.637,60.375 31.97,61.042 33.137,60.875 C35.59,60.524 36.637,59.042 38.137,60.875 C39.969,60.542 40.324,58.016 40.969,57.708 C42.136,58.042 42.927,59.206 43.303,59.708 C44.303,57.208 47.469,55.708 46.303,53.542 M30.674,49.721 C29.631,52.664 29.947,55.145 30.542,56.932 C30.939,58.122 31.78,59.715 32.969,60.708 M16.585,5.864 L17.776,8.642 L9.837,11.62 L11.821,13.801 L5.471,21.542 L7.456,22.732 L2.891,29.479 L4.677,30.075 C4.677,30.075 1.053,35.042 0.709,38.608 C2.303,38.542 3.089,39.204 3.089,39.204 C3.089,39.204 1.803,45.541 3.289,46.942 C5.053,45.541 6.067,45.686 6.067,45.686 L8.182,48.2 L10.3,45.289 C10.3,45.289 11.303,49.291 12.813,50.118 C13.303,48.541 13.803,46.542 13.803,46.542 L17.776,48.333 L18.766,42.378 L21.137,42.042 L20.355,43.569 L21.744,44.959 L19.561,48.53 L21.744,49.721 C21.744,49.721 18.637,53.376 19.469,56.042 C21.137,54.876 22.118,55.904 22.118,55.904 C22.118,55.904 20.469,58.708 21.137,60.542 C23.093,60.408 24.126,60.635 24.126,60.635 C24.126,60.635 23.386,64.875 25.553,66.042 C26.719,64.708 26.886,64.168 28.094,64.605 C28.137,67.041 29.636,68.875 30.469,69.042 C31.303,67.208 32.46,66.588 32.46,66.588 C32.46,66.588 33.969,68.625 37.303,69.291 C37.803,67.542 40.053,66.291 40.053,66.291 C40.053,66.291 40.637,66.042 41.053,69.042 C43.553,68.208 45.36,66.588 45.36,66.588 C45.36,66.588 47.303,67.292 49.053,68.541 C49.553,67.542 48.303,65.541 50.717,64.01 C52.553,64.542 53.496,65.2 53.496,65.2 L54.686,61.034 L57.663,62.422 C57.663,62.422 57.553,60.292 58.553,58.792 C60.303,59.542 61.303,59.792 61.803,60.792 C63.303,57.292 62.276,54.737 62.276,54.737 C62.276,54.737 64.053,54.542 65.303,55.292 C65.053,51.042 62.823,47.539 62.823,47.539 L65.403,48.133 L64.212,42.18 L66.528,40.261 L65.735,38.277 L68.91,40.394 C68.91,40.394 68.553,44.041 68.91,45.686 C70.553,44.041 71.753,44.065 71.753,44.065 C71.753,44.065 71.637,48.042 73.936,48.927 C74.803,48.042 76.913,45.753 76.913,45.753 L78.104,47.737 L80.684,44.959 C80.684,44.959 83.553,45.792 84.053,48.042 C85.299,45.839 85.469,43.875 85.137,42.042 C86.898,41.935 87.803,42.375 88.469,42.375 C88.651,39.979 87.034,37.02 87.034,37.02 C87.034,37.02 89.303,36.207 90.637,36.207 C91.137,32.708 85.645,28.883 85.645,28.883 C85.645,28.883 86.303,28.042 88.969,28.376 C89.137,26.042 83.66,21.74 83.66,21.74 C83.66,21.74 85.137,21.376 86.137,21.208 C85.637,19.042 79.692,15.786 79.692,15.786 C79.692,15.786 79.637,14.542 80.303,13.208 C77.969,11.542 75.47,10.376 74.137,9.542 C74.303,8.376 75.222,8.983 76.637,8.208 C73.303,4.876 69.469,5.208 69.469,5.208 C69.469,5.208 68.97,3.208 70.637,2.376 C68.47,1.208 65.403,4.077 65.403,4.077 L63.221,1.894 L60.639,4.871 C60.639,4.871 57.637,1.376 53.969,1.208 C54.785,3.181 54.686,4.077 54.686,4.077 C54.686,4.077 50.38,1.256 48.053,1.042 C47.727,3.327 46.803,3.292 46.803,3.292 C46.803,3.292 42.969,0.708 40.137,0.876 C42.803,2.792 42.184,3.878 42.184,3.878 L36.231,1.894 C36.231,1.894 37.803,3.708 36.803,5.376 C35.137,5.042 34.469,5.042 32.303,3.876 C31.303,5.208 29.682,9.04 29.682,9.04 L28.69,4.276 L25.316,5.07 L23.53,2.49 L22.14,5.864 L16.585,5.864 z"
              fillOpacity="0"
              stroke="#1A1919"
              strokeWidth="1.417"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M48.27,31.926 C45.587,31.784 45.485,36.809 48.667,36.491 C51.313,36.225 50.292,32.035 48.27,31.926"
              fill="#1A1919"
            />
            <path
              d="M30.806,31.794 C28.426,32.2 27.767,37.053 31.071,36.292 C32.619,35.934 32.819,31.452 30.806,31.794"
              fill="#1A1919"
            />
            <path
              d="M37.223,106.279 C36.727,106.577 35.554,108.041 35.239,108.461 C34.833,109.003 35.612,109.417 35.635,110.049 C35.667,110.893 34.842,110.983 34.842,111.835 M39.406,107.868 C39.406,109.255 38.557,109.514 38.415,110.249 C38.368,110.487 38.215,111.792 38.215,112.431 M56.472,107.668 C56.19,107.926 56.151,108.906 55.678,109.455 C55.329,109.864 54.521,109.805 54.356,110.249 C53.966,111.286 54.422,112.266 54.489,112.829 M59.118,108.264 C58.639,108.891 58.743,109.78 58.324,110.512 C58.049,110.996 57.139,111.284 57.134,111.835 C57.13,112.297 57.796,112.961 57.928,113.424 M86.637,103.764 C86.171,104.059 86.099,104.258 85.645,105.088 C85.008,106.25 84.057,106.478 84.057,107.47 C84.057,108.424 83.952,109.323 84.389,109.718 M89.812,104.558 C89.147,105.005 87.749,105.321 87.297,106.413 C87.118,106.853 87.772,107.429 87.828,108 C87.91,108.837 87.489,109.672 87.694,110.115 M92.59,104.428 C92.301,104.651 92.314,106.434 91.93,106.676 C91.451,106.978 90.72,106.942 90.606,107.336 C90.399,108.053 91.245,108.98 91.399,109.852 M62.293,108.793 C61.499,109.588 61.04,109.774 60.971,110.512 C60.941,110.844 61.113,110.929 61.236,111.573 C61.387,112.362 61.233,112.936 61.236,113.424 M43.969,107.073 C43.311,107.6 43.723,108.963 43.573,109.852 C43.526,110.135 42.322,110.571 42.184,110.844 C41.885,111.432 42.796,112.436 42.978,113.026"
              fillOpacity="0"
              stroke="#1A1919"
              strokeWidth="1.417"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24.902,49.542 C24.324,47.274 26.771,45.289 30.145,45.157 C33.325,45.032 37.024,46.315 37.024,48.927 C37.024,51.309 33.717,53.227 30.542,53.227 C27.135,53.227 25.551,52.088 24.902,49.542"
              fill="#885940"
            />
            <path
              d="M24.902,49.542 C24.324,47.274 26.771,45.289 30.145,45.157 C33.325,45.032 37.024,46.315 37.024,48.927 C37.024,51.309 33.717,53.227 30.542,53.227 C27.135,53.227 25.551,52.088 24.902,49.542 z"
              fillOpacity="0"
              stroke="#1A1919"
              strokeWidth="1.417"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.585,39.6 C16.585,39.534 16.585,39.467 16.585,39.401"
              fill="#D79F7E"
            />
            <path
              d="M21.303,41.876 L24.137,39.042 C24.137,39.042 22.969,38.542 21.469,38.542 C21.637,35.874 25.469,32.376 25.469,32.376 C25.469,32.376 23.969,31.707 23.969,30.375 C25.469,28.707 26.969,27.042 26.969,27.042 C26.969,27.042 27.803,25.376 25.137,23.708 M65.803,38.376 L63.419,34.639 C63.419,34.639 62.998,32.747 64.969,31.707 C64.998,30.414 61.632,27.495 61.632,27.495 C61.632,27.495 62.637,25.208 64.411,24.915"
              fillOpacity="0"
              stroke="#1A1919"
              strokeWidth="1.417"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
        <h2 className="text-xl md:text-2xl text-center  text-shadow-sm shadow-black/10 text-zinc-800 font-montserrat mb-3">
          Puppies for sale
        </h2>
        <p className="text-base font-montserrat text-zinc-700 italic mb-5 text-center">
          See all of our <strong>available pups</strong>, or{" "}
          <strong>register interest </strong>
          for upcoming litters
        </p>
        <div className="flex space-x-5">
          <Link to="/puppies">
            <button className="transition-all font-montserrat px-5 py-2 border-2 border-sky-800 rounded-md hover:shadow-xl shadow text-gray-100 bg-sky-800 text-sm md:text-lg font-normal hover:bg-sky-900 hover:border-sky-900">
              Available Puppies
            </button>
          </Link>
          <Link to="/puppies">
            <button className="transition-all font-montserrat px-5 py-2 border-2 border-sky-800 rounded-md hover:shadow-xl shadow text-gray-100 bg-sky-800 text-sm md:text-lg font-normal hover:bg-sky-900 hover:border-sky-900">
              Register Interest
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
