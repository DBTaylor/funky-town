import {useState, useRef, useEffect} from 'react'

export const never = (_: never): never => _

export const fix = <X extends any[], Y> (f: (f: (...args: X) => Y) => (...args: X) => Y) => (...args: X):Y =>
    f(fix(f))(...args)

export function pipe<A, B>(
    a: A,
    ab:  (a: A) => B
): B
export function pipe<A, B, C>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C
): C
export function pipe<A, B, C, D>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D
): D
export function pipe<A, B, C, D, E>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E
): E
export function pipe<A, B, C, D, E, F>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F
): F
export function pipe<A, B, C, D, E, F, G>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G
): G
export function pipe<A, B, C, D, E, F, G, H>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H
): H
export function pipe<A, B, C, D, E, F, G, H, I>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I
): I
export function pipe<A, B, C, D, E, F, G, H, I, J>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I,
    ij:  (i: I) => J
): J
export function pipe<A, B, C, D, E, F, G, H, I, J, K>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I,
    ij:  (i: I) => J,
    jk:  (j: J) => K
): K
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I,
    ij:  (i: I) => J,
    jk:  (j: J) => K,
    kl:  (k: K) => L
): L
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I,
    ij:  (i: I) => J,
    jk:  (j: J) => K,
    kl:  (k: K) => L,
    lm:  (l: L) => M
): M
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I,
    ij:  (i: I) => J,
    jk:  (j: J) => K,
    kl:  (k: K) => L,
    lm:  (l: L) => M,
    mn:  (m: M) => N
): N
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I,
    ij:  (i: I) => J,
    jk:  (j: J) => K,
    kl:  (k: K) => L,
    lm:  (l: L) => M,
    mn:  (m: M) => N,
    no:  (n: N) => O
): O
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I,
    ij:  (i: I) => J,
    jk:  (j: J) => K,
    kl:  (k: K) => L,
    lm:  (l: L) => M,
    mn:  (m: M) => N,
    no:  (n: N) => O,
    op:  (o: O) => P
): P
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I,
    ij:  (i: I) => J,
    jk:  (j: J) => K,
    kl:  (k: K) => L,
    lm:  (l: L) => M,
    mn:  (m: M) => N,
    no:  (n: N) => O,
    op:  (o: O) => P,
    pq:  (p: P) => Q
): Q
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I,
    ij:  (i: I) => J,
    jk:  (j: J) => K,
    kl:  (k: K) => L,
    lm:  (l: L) => M,
    mn:  (m: M) => N,
    no:  (n: N) => O,
    op:  (o: O) => P,
    pq:  (p: P) => Q,
    qr:  (q: Q) => R
): R
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I,
    ij:  (i: I) => J,
    jk:  (j: J) => K,
    kl:  (k: K) => L,
    lm:  (l: L) => M,
    mn:  (m: M) => N,
    no:  (n: N) => O,
    op:  (o: O) => P,
    pq:  (p: P) => Q,
    qr:  (q: Q) => R,
    rs:  (r: R) => S
): S
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I,
    ij:  (i: I) => J,
    jk:  (j: J) => K,
    kl:  (k: K) => L,
    lm:  (l: L) => M,
    mn:  (m: M) => N,
    no:  (n: N) => O,
    op:  (o: O) => P,
    pq:  (p: P) => Q,
    qr:  (q: Q) => R,
    rs:  (r: R) => S,
    st:  (s: S) => T
): T
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I,
    ij:  (i: I) => J,
    jk:  (j: J) => K,
    kl:  (k: K) => L,
    lm:  (l: L) => M,
    mn:  (m: M) => N,
    no:  (n: N) => O,
    op:  (o: O) => P,
    pq:  (p: P) => Q,
    qr:  (q: Q) => R,
    rs:  (r: R) => S,
    st:  (s: S) => T,
    tu:  (t: T) => U
): U
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I,
    ij:  (i: I) => J,
    jk:  (j: J) => K,
    kl:  (k: K) => L,
    lm:  (l: L) => M,
    mn:  (m: M) => N,
    no:  (n: N) => O,
    op:  (o: O) => P,
    pq:  (p: P) => Q,
    qr:  (q: Q) => R,
    rs:  (r: R) => S,
    st:  (s: S) => T,
    tu:  (t: T) => U,
    uv:  (u: U) => V
): V
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I,
    ij:  (i: I) => J,
    jk:  (j: J) => K,
    kl:  (k: K) => L,
    lm:  (l: L) => M,
    mn:  (m: M) => N,
    no:  (n: N) => O,
    op:  (o: O) => P,
    pq:  (p: P) => Q,
    qr:  (q: Q) => R,
    rs:  (r: R) => S,
    st:  (s: S) => T,
    tu:  (t: T) => U,
    uv:  (u: U) => V,
    vw:  (v: V) => W
): W
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I,
    ij:  (i: I) => J,
    jk:  (j: J) => K,
    kl:  (k: K) => L,
    lm:  (l: L) => M,
    mn:  (m: M) => N,
    no:  (n: N) => O,
    op:  (o: O) => P,
    pq:  (p: P) => Q,
    qr:  (q: Q) => R,
    rs:  (r: R) => S,
    st:  (s: S) => T,
    tu:  (t: T) => U,
    uv:  (u: U) => V,
    vw:  (v: V) => W,
    wx:  (w: W) => X
): X
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I,
    ij:  (i: I) => J,
    jk:  (j: J) => K,
    kl:  (k: K) => L,
    lm:  (l: L) => M,
    mn:  (m: M) => N,
    no:  (n: N) => O,
    op:  (o: O) => P,
    pq:  (p: P) => Q,
    qr:  (q: Q) => R,
    rs:  (r: R) => S,
    st:  (s: S) => T,
    tu:  (t: T) => U,
    uv:  (u: U) => V,
    vw:  (v: V) => W,
    wx:  (w: W) => X,
    xy:  (x: X) => Y
): Y
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>(
    a: A,
    ab:  (a: A) => B,
    bc:  (b: B) => C,
    cd:  (c: C) => D,
    de:  (d: D) => E,
    ef:  (e: E) => F,
    fg:  (f: F) => G,
    gh:  (g: G) => H,
    hi:  (h: H) => I,
    ij:  (i: I) => J,
    jk:  (j: J) => K,
    kl:  (k: K) => L,
    lm:  (l: L) => M,
    mn:  (m: M) => N,
    no:  (n: N) => O,
    op:  (o: O) => P,
    pq:  (p: P) => Q,
    qr:  (q: Q) => R,
    rs:  (r: R) => S,
    st:  (s: S) => T,
    tu:  (t: T) => U,
    uv:  (u: U) => V,
    vw:  (v: V) => W,
    wx:  (w: W) => X,
    xy:  (x: X) => Y,
    yz:  (y: Y) => Z
): Z    
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z>(
    a: A,
    ab: (a: A) => B,
    bc?:  (b: B) => C,
    cd?:  (c: C) => D,
    de?:  (d: D) => E,
    ef?:  (e: E) => F,
    fg?:  (f: F) => G,
    gh?:  (g: G) => H,
    hi?:  (h: H) => I,
    ij?:  (i: I) => J,
    jk?:  (j: J) => K,
    kl?:  (k: K) => L,
    lm?:  (l: L) => M,
    mn?:  (m: M) => N,
    no?:  (n: N) => O,
    op?:  (o: O) => P,
    pq?:  (p: P) => Q,
    qr?:  (q: Q) => R,
    rs?:  (r: R) => S,
    st?:  (s: S) => T,
    tu?:  (t: T) => U,
    uv?:  (u: U) => V,
    vw?:  (v: V) => W,
    wx?:  (w: W) => X,
    xy?:  (x: X) => Y,
    yz?:  (y: Y) => Z
){
    let x: A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z = a;
    for (let f of [ab, bc, cd, de, ef, fg, gh, hi, ij, jk, kl, lm, mn, no, op, pq, qr, rs, st, tu, uv, vw, wx, xy, yz]){
        if(f)
            x = f(x as any)
        else    
            break
    }
    return x
}


export function set<T,
    U extends keyof T
>(source: T, path: readonly [U] | U, val: T[U]): T
export function set<T,
    U extends keyof T,
    V extends keyof T[U]
>(source: T, path: readonly [U, V], val: T[U][V]): T
export function set<T,
    U extends keyof T,
    V extends keyof T[U],
    W extends keyof T[U][V],
>
(source: T, path: readonly [U, V, W], val: T[U][V][W]): T
export function set<T,
    U extends keyof T,
    V extends keyof T[U],
    W extends keyof T[U][V],
    X extends keyof T[U][V][W],
>
(source: T, path: readonly [U, V, W, X], val: T[U][V][W][X]): T
export function set<T,
    U extends keyof T,
    V extends keyof T[U],
    W extends keyof T[U][V],
    X extends keyof T[U][V][W],
    Y extends keyof T[U][V][W][X],
>
(source: T, path: readonly [U, V, W, X, Y], val: T[U][V][W][X][Y]): T
export function set<T,
    U extends keyof T,
    V extends keyof T[U],
    W extends keyof T[U][V],
    X extends keyof T[U][V][W],
    Y extends keyof T[U][V][W][X],
    Z extends keyof T[U][V][W][X][Y],
>
(source: T, path: readonly [U, V, W, X, Y, Z], val: T[U][V][W][X][Y][Z]): T

export function set<T,
    U extends keyof T,
    V extends keyof T[U],
    W extends keyof T[U][V],
    X extends keyof T[U][V][W],
    Y extends keyof T[U][V][W][X],
    Z extends keyof T[U][V][W][X][Y],
>
(source: T, path: [U, V?, W?, X?, Y?, Z?] | U, val: T[U] | T[U][V] | T[U][V][W] | T[U][V][W][X] | T[U][V][W][X][Y] | T[U][V][W][X][Y][Z]): T{
    let keys: any
    let last
    if(Array.isArray(path)){
        keys = [...path]
        last = keys.pop()
    }
    else{
        keys = []
        last = path
    }
    let temp: any = source
    let dests = [Object.assign({}, temp)]
    for (let key of keys){
        temp = temp[key]
        dests.push(Array.isArray(temp) ? [...temp] : Object.assign({}, temp))
    }
    let dest = dests.pop()
    dest[last] = val
    while(keys.length){
        temp = dests.pop()
        temp[keys.pop()] = dest
        dest = temp
    }
    return dest
}

export function over<T,
    U extends keyof T
>
(source: T, path: readonly [U] | U, f: (_: T[U]) => T[U]): T
export function over<T,
    U extends keyof T,
    V extends keyof T[U]
>
(source: T, path: readonly [U, V], f: (_: T[U][V]) => T[U][V]): T
export function over<T,
    U extends keyof T,
    V extends keyof T[U],
    W extends keyof T[U][V],
>
(source: T, path: readonly [U, V, W], f: (_: T[U][V][W]) => T[U][V][W]): T
export function over<T,
    U extends keyof T,
    V extends keyof T[U],
    W extends keyof T[U][V],
    X extends keyof T[U][V][W],
>
(source: T, path: readonly [U, V, W, X], f: (_: T[U][V][W][X]) => T[U][V][W][X]): T
export function over<T,
    U extends keyof T,
    V extends keyof T[U],
    W extends keyof T[U][V],
    X extends keyof T[U][V][W],
    Y extends keyof T[U][V][W][X],
>
(source: T, path: readonly [U, V, W, X, Y], f: (_: T[U][V][W][X][Y]) => T[U][V][W][X][Y]): T
export function over<T,
    U extends keyof T,
    V extends keyof T[U],
    W extends keyof T[U][V],
    X extends keyof T[U][V][W],
    Y extends keyof T[U][V][W][X],
    Z extends keyof T[U][V][W][X][Y],
>
(source: T, path: readonly [U, V, W, X, Y, Z], f: (_: T[U][V][W][X][Y][Z]) => T[U][V][W][X][Y][Z]): T
export function over<T,
    U extends keyof T,
    V extends keyof T[U],
    W extends keyof T[U][V],
    X extends keyof T[U][V][W],
    Y extends keyof T[U][V][W][X],
    Z extends keyof T[U][V][W][X][Y],
>
(source: T, path: [U, V?, W?, X?, Y?, Z?] | U, f: ((_: T[U]) => T[U]) | ((_: T[U][V]) => T[U][V]) | ((_: T[U][V][W]) => T[U][V][W]) | ((_: T[U][V][W][X]) => T[U][V][W][X]) | ((_: T[U][V][W][X][Y]) => T[U][V][W][X][Y]) | ((_: T[U][V][W][X][Y][Z]) => T[U][V][W][X][Y][Z])): T{
    let keys: any
    let last
    if(Array.isArray(path)){
        keys = [...path]
        last = keys.pop()
    }
    else{
        keys = []
        last = path
    }
    let temp: any = source
    let dests = [Object.assign({}, temp)]
    for (let key of keys){
        temp = temp[key]
        dests.push(Array.isArray(temp) ? [...temp] : Object.assign({}, temp))
    }
    let dest = dests.pop()
    dest[last] = f(dest[last])
    while(keys.length){
        temp = dests.pop()
        temp[keys.pop()] = dest
        dest = temp
    }
    return dest
}

export type Action<S> = 
    | Partial<S>
    | Promise<Action<S>>
    | ((s: S) => Action<S>)
    | Action<S>[]

export type Setter<S> = (f: (s: S) => S) => unknown

export type UnboundAction<S, Args extends any[]> = ((...args: Args) => Action<S>)

export const merge = <T, U>(t: T, u: U): T & U => {
    const obj = Object.assign({}, t)
    return Object.assign(obj, u)
}

export const handleRes = <S>(s: S, res: Action<S>, setter: Setter<S>): S => {
    if (Array.isArray(res)){
        const a = res.shift()
        if(a){
            setTimeout(() => executeAction(setter, res), 0)
            return handleRes(s, a, setter)
        }
        else{
            return s
        }
    }
    else if (typeof (res as any).then == 'function'){
        (res as Promise<Action<S>>).then(a => executeAction(setter, a))
        return s
    }
    else if (typeof res == 'function'){
            return handleRes(s, res(s), setter)
    }
    else{
        return merge(s, res as Partial<S>)
    }
}

export const executeAction = <S>(setter: Setter<S>, action: Action<S>) => {
    if (Array.isArray(action)){
        const a = action.shift()
        if(a){
            executeAction(setter, a)
            executeAction(setter, action)
        }
    }
    else if (typeof (action as any).then == 'function'){
        (action as Promise<Action<S>>).then(a => executeAction(setter, a))
    }
    else if (typeof action == 'function'){
        setter(s => {
            const res = action(s)
            return handleRes(s, res, setter)
        })
    }
    else{
        setter(s => merge(s, action as Partial<S>))
    }
}

export const bindAction = <S, Args extends any[]>(setter: Setter<S>, action: UnboundAction<S, Args>) => 
    (...args: Args) => 
        executeAction(setter, action(...args))

export type All<T> = {
    [P: string]: T;
}

export const objectMap = (object: object, mapFn: (p: object[(keyof object)]) => any): object =>
    Object.keys(object).reduce(function(result, key) {
        (result as any)[key] = mapFn(object[key as never])
        return result as any
    }, {})

export const bindActions = <S, Acts extends All<UnboundAction<S, any[]>>>(setter: Setter<S>, actions: Acts): BoundActions<Acts> =>
    objectMap(actions, (action) => bindAction(setter, action)) as any

export type BoundActions<T> = {
    [P in keyof T]:
        T[P] extends UnboundAction<infer S, infer Args> ?
            (...args: Args) => unknown
        : never
}

export const useAnimation = <T extends HTMLElement>(startClass: string, otherClass: string, startTrigger?: boolean): [React.RefObject<T>, string, () => unknown] => {
    const [startAnimation, setStartAnimation] = useState(false)
    const ref = useRef<T>(null)
    if(startTrigger)
        setStartAnimation(true)
    useEffect(
        ()=>{
        if(startAnimation){
            ref.current?.offsetHeight
            setStartAnimation(false)
        }
        }, [startAnimation]
    )
    return [ref, startAnimation ? startClass : otherClass, () => setStartAnimation(true)]
}
  
export const useValueChange = (v?: any) => {
    const[prev, setPrev] = useState(v)
    if (v !== prev){
        setPrev(v)
        return true
    }
    return false
}

export const useOnce = () => {
    const[once, setOnce] = useState(true)
    if(once)
        setOnce(false)
    return once
}

export class Signal<T>{
    private _value: T;
    private subscribers = [] as ((value: T) => unknown)[] 

    constructor(value: T){
        this._value = value
    }

    public write(value: T){
        const changed = this._value != value
        this._value = value
        if(changed)
            this.subscribers.forEach(s => s(value))
    }

    public subscribe(f: (value: T) => unknown){
        this.subscribers.push(f)
    }

    public unsubscribe(f: (value: T) => unknown){
        this.subscribers.splice(this.subscribers.findIndex(s => s == f), 1)
    }

    public get value(){
        return this._value
    }
}

export const useSignal = <T>(signal: Signal<T>) => {
    const [state, setState] = useState(signal.value)
    useEffect(() => {
        const callback = (value: T) => setState(value)
        signal.subscribe(callback)
        return () => signal.unsubscribe(callback)
    }, [])
    return state
}

export type Signals<T> = {
    [P in keyof T]: Signal<T[P]>
}

export const signals = <T extends object>(obj: object): Signals<T> => objectMap(obj, p => new Signal(p)) as any