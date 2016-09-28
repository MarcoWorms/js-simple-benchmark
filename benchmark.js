'use strict'

const repeat = (n, func) => {
  Array(n).fill(1).forEach((el, index) => func(index))
}

const runBenchmark = (benchmark) => {
  benchmark.before()
  repeat(benchmark.iterations, (iteration) => {
    console.log("----  " + benchmark.name + ": iteration " + iteration + "  ----")
    benchmark.functions.forEach((func, index) => {
      console.time(iteration + " " + index)
      repeat(benchmark.unitRepeat, () => {
          func()
      })
      console.timeEnd(iteration + " " + index)
    })
  })
}

const exampleBenchmark = {
  name: 'DOM getAttribute',
  iterations: 10,
  unitRepeat: 1000000,
  functions: [
    () => document.querySelectorAll("li")[0].attributes.test.value,
    () =>  document.querySelectorAll("li")[0].getAttribute("test")
  ],
  before: () => {
    document.querySelectorAll("li")[0].setAttribute("test", "blabla")
  }
}

runBenchmark(exampleBenchmark)








//
//
//
// getAttribute()
// hasAttribute()
// removeAttribute()