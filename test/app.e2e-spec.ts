import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import * as fs from 'fs';
import { isEqual } from 'lodash'

function getInputOutputFileNames(
  fileList: string[],
  i: number,
): [string, string] {
  const testFileInput: string = fileList.find(
    (f) => f.startsWith(`test${i}_`) && f.includes(`input`),
  );
  const testFileOutput: string = fileList.find(
    (f) => f.startsWith(`test${i}_`) && f.includes(`output`),
  );

  return [testFileInput, testFileOutput];
}
async function getInputOutputContents(
  testFileInput: string,
  testFileOutput: string,
): Promise<[string, string]> {
  const inputFilePath: string = `test/files/${testFileInput}`;
  const input: string = await fs.readFileSync(inputFilePath, 'utf8');

  const outputFilePath: string = `test/files/${testFileOutput}`;
  const output: string = await fs.readFileSync(outputFilePath, 'utf8');

  return [input, output];
}

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /v1/geofence', async () => {
    const testFolder: string = 'test/files';
    const files: string[] = fs.readdirSync(testFolder);
    let testsRan: number = 0;

    for (let i = 0; i < files.length / 2; i++) {
      const [testFileInput, testFileOutput] = getInputOutputFileNames(files, i);
      const [input, expectedOutput] = await getInputOutputContents(
        testFileInput,
        testFileOutput,
      );

      const expectedHttpStatus: number = testFileOutput.includes("badrequest") ? 400 : 201;
      console.info(`Testing ${testFileInput} vs ${testFileOutput}`);
      const response = await request(app.getHttpServer())
        .post('/v1/geofence')
        .set('Content-Type', 'application/json')
        .send(input)
      ;
      
      expect(response.status).toBe(expectedHttpStatus);
      expect(isEqual(JSON.parse(response.text), JSON.parse(expectedOutput))).toBeTruthy(); // lodash json deep comparison
      
      testsRan++;

    }
    console.info(`Total tests ran: ${testsRan}`);
  });
});
