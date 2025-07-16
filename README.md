<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

<!-- lint disable maximum-heading-length -->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# covarmtk

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Calculate the [covariance][covariance] of two strided arrays provided known means and using a one-pass textbook algorithm.

<section class="intro">

The population [covariance][covariance] of two finite size populations of size `N` is given by

<!-- <equation class="equation" label="eq:population_covariance" align="center" raw="\operatorname{\mathrm{cov_N}} = \frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu_x)(y_i - \mu_y)" alt="Equation for the population covariance."> -->

```math
\mathop{\mathrm{cov_N}} = \frac{1}{N} \sum_{i=0}^{N-1} (x_i - \mu_x)(y_i - \mu_y)
```

<!-- </equation> -->

where the population means are given by

<!-- <equation class="equation" label="eq:population_mean_for_x" align="center" raw="\mu_x = \frac{1}{N} \sum_{i=0}^{N-1} x_i" alt="Equation for the population mean for first array."> -->

```math
\mu_x = \frac{1}{N} \sum_{i=0}^{N-1} x_i
```

<!-- </equation> -->

and

<!-- <equation class="equation" label="eq:population_mean_for_y" align="center" raw="\mu_y = \frac{1}{N} \sum_{i=0}^{N-1} y_i" alt="Equation for the population mean for second array."> -->

```math
\mu_y = \frac{1}{N} \sum_{i=0}^{N-1} y_i
```

<!-- </equation> -->

Often in the analysis of data, the true population [covariance][covariance] is not known _a priori_ and must be estimated from samples drawn from population distributions. If one attempts to use the formula for the population [covariance][covariance], the result is biased and yields a **biased sample covariance**. To compute an **unbiased sample covariance** for samples of size `n`,

<!-- <equation class="equation" label="eq:unbiased_sample_covariance" align="center" raw="\operatorname{\mathrm{cov_n}} = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x}_n)(y_i - \bar{y}_n)" alt="Equation for computing an unbiased sample variance."> -->

```math
\mathop{\mathrm{cov_n}} = \frac{1}{n-1} \sum_{i=0}^{n-1} (x_i - \bar{x}_n)(y_i - \bar{y}_n)
```

<!-- </equation> -->

where sample means are given by

<!-- <equation class="equation" label="eq:sample_mean_for_x" align="center" raw="\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i" alt="Equation for the sample mean for first array."> -->

```math
\bar{x} = \frac{1}{n} \sum_{i=0}^{n-1} x_i
```

<!-- </equation> -->

and

<!-- <equation class="equation" label="eq:sample_mean_for_y" align="center" raw="\bar{y} = \frac{1}{n} \sum_{i=0}^{n-1} y_i" alt="Equation for the sample mean for second array."> -->

```math
\bar{y} = \frac{1}{n} \sum_{i=0}^{n-1} y_i
```

<!-- </equation> -->

The use of the term `n-1` is commonly referred to as Bessel's correction. Depending on the characteristics of the population distributions, other correction factors (e.g., `n-1.5`, `n+1`, etc) can yield better estimators.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import covarmtk from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-covarmtk@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-covarmtk@deno/mod.js';
```

#### covarmtk( N, correction, meanx, x, strideX, meany, y, strideY )

Computes the [covariance][covariance] of two strided arrays provided known means and using a one-pass textbook algorithm.

```javascript
var x = [ 1.0, -2.0, 2.0 ];
var y = [ 2.0, -2.0, 1.0 ];

var v = covarmtk( x.length, 1, 1.0/3.0, x, 1, 1.0/3.0, y, 1 );
// returns ~3.8333
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **correction**: degrees of freedom adjustment. Setting this parameter to a value other than `0` has the effect of adjusting the divisor during the calculation of the [covariance][covariance] according to `N-c` where `c` corresponds to the provided degrees of freedom adjustment. When computing the population [covariance][covariance], setting this parameter to `0` is the standard choice (i.e., the provided arrays contain data constituting entire populations). When computing the unbiased sample [covariance][covariance], setting this parameter to `1` is the standard choice (i.e., the provided arrays contain data sampled from larger populations; this is commonly referred to as Bessel's correction).
-   **meanx**: mean of `x`.
-   **x**: first input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length for `x`.
-   **meany**: mean of `y`.
-   **y**: second input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideY**: stride length for `y`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to compute the [covariance][covariance] of every other element in `x` and `y`,

```javascript
var x = [ 1.0, 2.0, 2.0, -7.0, -2.0, 3.0, 4.0, 2.0 ];
var y = [ 2.0, 1.0, 2.0, 1.0, -2.0, 2.0, 3.0, 4.0 ];

var v = covarmtk( 4, 1, 1.25, x, 2, 1.25, y, 2 );
// returns 5.25
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x0 = new Float64Array( [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ] );
var y0 = new Float64Array( [ 2.0, -2.0, 2.0, 1.0, -2.0, 4.0, 3.0, 2.0 ] );

var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

var v = covarmtk( 4, 1, 1.25, x1, 2, 1.25, y1, 2 );
// returns ~1.9167
```

#### covarmtk.ndarray( N, correction, meanx, x, strideX, offsetX, meany, y, strideY, offsetY )

Computes the [covariance][covariance] of two strided arrays provided known means and using a one-pass textbook algorithm and alternative indexing semantics.

```javascript
var x = [ 1.0, -2.0, 2.0 ];
var y = [ 2.0, -2.0, 1.0 ];

var v = covarmtk.ndarray( x.length, 1, 1.0/3.0, x, 1, 0, 1.0/3.0, y, 1, 0 );
// returns ~3.8333
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to calculate the [covariance][covariance] for every other element in `x` and `y` starting from the second element

```javascript
var x = [ 2.0, 1.0, 2.0, -2.0, -2.0, 2.0, 3.0, 4.0 ];
var y = [ -7.0, 2.0, 2.0, 1.0, -2.0, 2.0, 3.0, 4.0 ];

var v = covarmtk.ndarray( 4, 1, 1.25, x, 2, 1, 1.25, y, 2, 1 );
// returns 6.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `NaN`.
-   If `N - c` is less than or equal to `0` (where `c` corresponds to the provided degrees of freedom adjustment), both functions return `NaN`.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array-base/accessor`][@stdlib/array/base/accessor]).
-   Depending on the environment, the typed versions ([`dcovarmtk`][@stdlib/stats/strided/dcovarmtk], [`scovarmtk`][@stdlib/stats/strided/scovarmtk], etc.) are likely to be significantly more performant.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import covarmtk from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-strided-covarmtk@deno/mod.js';

var opts = {
    'dtype': 'generic'
};
var x = discreteUniform( 10, -50, 50, opts );
console.log( x );

var y = discreteUniform( 10, -50, 50, opts );
console.log( y );

var v = covarmtk( x.length, 1, 0.0, x, 1, 0.0, y, 1 );
console.log( v );
```

</section>

<!-- /.examples -->

* * *

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-strided-covarmtk.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-strided-covarmtk

[test-image]: https://github.com/stdlib-js/stats-strided-covarmtk/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-strided-covarmtk/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-strided-covarmtk/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-strided-covarmtk?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-strided-covarmtk.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-strided-covarmtk/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-strided-covarmtk/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-strided-covarmtk/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-strided-covarmtk/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-strided-covarmtk/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-strided-covarmtk/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-strided-covarmtk/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-strided-covarmtk/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-strided-covarmtk/main/LICENSE

[covariance]: https://en.wikipedia.org/wiki/Covariance

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor/tree/deno

[@stdlib/stats/strided/dcovarmtk]: https://github.com/stdlib-js/stats-strided-dcovarmtk/tree/deno

[@stdlib/stats/strided/scovarmtk]: https://github.com/stdlib-js/stats-strided-scovarmtk/tree/deno

</section>

<!-- /.links -->
