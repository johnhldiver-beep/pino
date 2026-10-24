import { expect } from 'tstyche'
import pino from '../../pino.js'
import type {
  CustomLevelLogger,
  DestinationStreamHasMetadata,
  MixinFn,
  MixinMergeStrategyFn,
  OnChildCallback,
  ParseLogFnArgs,
  PlaceholderSpecifier,
  PlaceholderTypeMapping,
  TimeFn
} from '../../pino.js'

// Regression test for https://github.com/pinojs/pino/issues/2531:
// the types below are referenced by public signatures, so they must
// remain reachable through the pino namespace.
expect<TimeFn>().type.toBe<pino.TimeFn>()
expect<MixinFn>().type.toBe<pino.MixinFn>()
expect<MixinMergeStrategyFn>().type.toBe<pino.MixinMergeStrategyFn>()
expect<CustomLevelLogger<'info'>>().type.toBe<pino.CustomLevelLogger<'info'>>()
expect<OnChildCallback>().type.toBe<pino.OnChildCallback>()
expect<DestinationStreamHasMetadata>().type.toBe<pino.DestinationStreamHasMetadata>()
expect<PlaceholderSpecifier>().type.toBe<pino.PlaceholderSpecifier>()
expect<PlaceholderTypeMapping<'d'>>().type.toBe<pino.PlaceholderTypeMapping<'d'>>()
expect<ParseLogFnArgs<'%s'>>().type.toBe<pino.ParseLogFnArgs<'%s'>>()

const timestamp: pino.TimeFn = () => new Date().toISOString()
const mixin: pino.MixinFn = (mergeObject, level) => ({ mergeObject, level })
const mixinMergeStrategy: pino.MixinMergeStrategyFn = (mergeObject, mixinObject) => ({ mergeObject, mixinObject })
const onChild: pino.OnChildCallback = () => {}

expect(timestamp).type.toBe<pino.TimeFn>()
expect(mixin).type.toBe<pino.MixinFn>()
expect(mixinMergeStrategy).type.toBe<pino.MixinMergeStrategyFn>()
expect(onChild).type.toBe<pino.OnChildCallback>()
