declare module 'sinek' {
  export interface IKafka {
    kafkaHost?: string;
    groupId?: string;
    clientName?: string;
    workerPerPartition?: number;
    options?: {
      sessionTimeout?: number;
      protocol?: [string];
      fromOffset?: string;
      fetchMaxBytes?: number;
      fetchMinBytes?: number;
      fetchMaxWaitMs?: number;
      heartbeatInterval?: number;
      retryMinTimeout?: number;
      autoCommit?: boolean;
      autoCommitIntervalMs?: number;
      requireAcks?: number;
      ackTimeoutMs?: number;
      partitionerType?: number;
   };
  }
  /**
   *
   * Typescript binding for Kafka class in Sinek
   *
   * @export
   * @class Kafka
   */
  export class Kafka {
      /**
       *Creates an instance of Kafka.
        * @param {String} conString
        * @param {object} logger
        * @param {boolean} connectDirectlyToBroker
        * @memberof Kafka
        */
      constructor(conString: String, logger: object, connectDirectlyToBroker: boolean)
  }
  export class Drainer {
      constructor(consumer: object, asyncLimit: number, autoJsonParsing: boolean, omitQueue: boolean, commitOnDrain: boolean)
  }
  export class Consumer {
      constructor(topic: String, config: IKafka);
      on(eventName: "message", cb: (message: object) => any): void;
      on(eventName: "error", cb: (error: any) => any): void;
      connect(backpressure?: boolean): Promise<Function>;
      consume(syncEvent?: object): Promise<Function>;
      consumeOnce(syncEvent?: object, drainThreshold?: number, timeout?: number): object;
      pause(): void;
      resume(): void;
      getStats(): object;
      close(commit: boolean): object;
  }
  export class Producer {
      constructor(config: object, topic: Array<String>, defaultPartitionCount: number);
      connect(backpressure?: boolean): Promise<Function>;
      send(topic: string, message: string | string[]): Promise<Function>;
      buffer(topic: string, identifier?: string, payload?: object, compressionType?: number): Promise<Function>;
      bufferFormat(topic: string, identifier?: string, payload?: object, version?: number, compressionType?: number, partitionKey?: string): Promise<Function>;
      bufferFormatPublish(topic: string, identifier?: string, payload?: object, version?: number, compressionType?: number, partitionKey?: string): Promise<Function>;
      bufferFormatUpdate(topic: string, identifier?: string, payload?: object, version?: number, compressionType?: number, partitionKey?: string): Promise<Function>;
      bufferFormatUnpublish(topic: string, identifier?: string, payload?: object, version?: number, compressionType?: number, partitionKey?: string): Promise<Function>;
      pause(): void;
      resume(): void;
      getStats(): object;
      refreshMetadata(topics: Array<string>): void;
      close(commit: boolean): object;
  }
  export class Publisher {
      constructor(producer: object, partitionCount: number, autoFlushBuffer: number, flushPeriod: number)
  }
  class PartitionDrainer {
      constructor(consumer: object, asyncLimit: number, commitOnDrain: boolean, autoJsonParsing: boolean)
  }
  class PartitionQueue {
      constructor(partition: object, drainEvent: object, drainer: object, asyncLimit: number, queueDrain: object)
  }
  interface MessageType {
      key: String;
      value: String;
  }
}
