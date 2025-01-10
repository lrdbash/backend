var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
let Submission = (() => {
    let _classDecorators = [Schema()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = Document;
    let _influencerId_decorators;
    let _influencerId_initializers = [];
    let _influencerId_extraInitializers = [];
    let _campaignId_decorators;
    let _campaignId_initializers = [];
    let _campaignId_extraInitializers = [];
    let _contentUrl_decorators;
    let _contentUrl_initializers = [];
    let _contentUrl_extraInitializers = [];
    let _status_decorators;
    let _status_initializers = [];
    let _status_extraInitializers = [];
    var Submission = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.influencerId = __runInitializers(this, _influencerId_initializers, void 0);
            this.campaignId = (__runInitializers(this, _influencerId_extraInitializers), __runInitializers(this, _campaignId_initializers, void 0));
            this.contentUrl = (__runInitializers(this, _campaignId_extraInitializers), __runInitializers(this, _contentUrl_initializers, void 0));
            this.status = (__runInitializers(this, _contentUrl_extraInitializers), __runInitializers(this, _status_initializers, void 0));
            __runInitializers(this, _status_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Submission");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _influencerId_decorators = [Prop({ required: true })];
        _campaignId_decorators = [Prop({ required: true })];
        _contentUrl_decorators = [Prop({ required: true })];
        _status_decorators = [Prop({ default: 'pending' })];
        __esDecorate(null, null, _influencerId_decorators, { kind: "field", name: "influencerId", static: false, private: false, access: { has: obj => "influencerId" in obj, get: obj => obj.influencerId, set: (obj, value) => { obj.influencerId = value; } }, metadata: _metadata }, _influencerId_initializers, _influencerId_extraInitializers);
        __esDecorate(null, null, _campaignId_decorators, { kind: "field", name: "campaignId", static: false, private: false, access: { has: obj => "campaignId" in obj, get: obj => obj.campaignId, set: (obj, value) => { obj.campaignId = value; } }, metadata: _metadata }, _campaignId_initializers, _campaignId_extraInitializers);
        __esDecorate(null, null, _contentUrl_decorators, { kind: "field", name: "contentUrl", static: false, private: false, access: { has: obj => "contentUrl" in obj, get: obj => obj.contentUrl, set: (obj, value) => { obj.contentUrl = value; } }, metadata: _metadata }, _contentUrl_initializers, _contentUrl_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: obj => "status" in obj, get: obj => obj.status, set: (obj, value) => { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Submission = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Submission = _classThis;
})();
export { Submission };
export const SubmissionSchema = SchemaFactory.createForClass(Submission);
