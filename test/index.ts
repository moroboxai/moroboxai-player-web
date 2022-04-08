import { expect } from 'chai';
import 'chai';
import * as MoroboxAIPlayer from '../src/';

describe('MoroboxAIPlayer', function ()
{
    it('should have VERSION', function ()
    {
        expect(MoroboxAIPlayer.VERSION).to.be.equal('0.1.0-alpha.1');
    });
});