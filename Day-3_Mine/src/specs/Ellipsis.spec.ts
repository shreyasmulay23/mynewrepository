///<reference path="../../typings/main/ambient/jasmine/jasmine.d.ts" />


import {
    it, xit,
    describe, expect,
    TestComponentBuilder,
    inject, injectAsync,
    setBaseTestProviders,
    beforeEachProviders
} from 'angular2/testing';
import { Ellipsis } from '../Ellipsis';

xdescribe('testing Ellipsis pipe', function () {
    it('testing positive scenario', function () {
        let ellipsis = new Ellipsis();
        let result = ellipsis.transform("Ramesh", [4, '.']);
        expect("Rame...").toEqual(result);
    });
    it('testing transform with "Ramesh", []', function () {
        let ellipsis = new Ellipsis();
        let result = ellipsis.transform("Ramesh", []);
        expect("Ramesh").toEqual(result);
    });

    it('testing transform with "", [5, "*"]', function () {
        let ellipsis = new Ellipsis();
        let result = ellipsis.transform("", [5, '*']);
        expect("").toEqual(result);
    });

    it('testing transform with "", []', function () {
        let ellipsis = new Ellipsis();
        let result = ellipsis.transform("", []);
        expect("").toEqual(result);
    });

    it('testing positive scenario', function () {
        let ellipsis = new Ellipsis();
        let result = ellipsis.transform("Ramesh", [7, '.']);
        expect("Ramesh").toEqual(result);
    });
    it('testing positive scenario', function () {
        let ellipsis = new Ellipsis();
        let result = ellipsis.transform("Ramesh", [, '.']);
        expect("Rame...").toEqual(result);
    });
    it('testing positive scenario', function () {
        let ellipsis = new Ellipsis();
        let result = ellipsis.transform("Ramesh", ["shre"]);
        expect("Ramesh").toEqual(result);
    });
    it('testing positive scenario', function () {
        let ellipsis = new Ellipsis();
        let result = ellipsis.transform("Ramesh", [5]);
        expect("Rames...").toEqual(result);
    });
});