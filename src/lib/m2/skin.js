import r from 'restructure';

import Nofs from './nofs';
import { Vec3Float } from '../types';

const Submesh = new r.Struct({
  id: r.uint16le,
  level: r.uint16le,
  startVertex: r.uint16le,
  vertexCount: r.uint16le,
  startTriangle: r.uint16le,
  triangleCount: r.uint16le,
  boneCount: r.uint16le,
  startBone: r.uint16le,
  boneInfluences: r.uint16le,
  rootBone: r.uint16le,
  centerMass: Vec3Float,
  centerBoundingBox: Vec3Float,
  radius: r.floatle
});

const TextureUnit = new r.Struct({
  flags: r.uint16le,
  shaderID: r.uint16le,
  submeshIndex: r.uint16le,
  submeshIndex2: r.uint16le,
  colorIndex: r.int16le,
  renderFlagsIndex: r.uint16le,
  textureUnitNumber: r.uint16le,
  opCount: r.uint16le,
  textureIndex: r.uint16le,
  textureUnitNumber2: r.uint16le,
  transparencyIndex: r.uint16le,
  textureAnimIndex: r.uint16le
});

export default new r.Struct({
  signature: new r.String(4),
  indices: new Nofs(r.uint16le),
  triangles: new Nofs(r.uint16le),
  boneIndices: new Nofs(new r.Array(r.uint8, 4)),
  submeshes: new Nofs(Submesh),
  textureUnits: new Nofs(TextureUnit),
  boneCount: r.uint32le
});
