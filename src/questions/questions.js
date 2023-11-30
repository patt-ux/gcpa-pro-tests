import code0007100001 from '../images/code0007100001.png';
import code72e15b4b from '../images/code72e15b4b.png';

export const setA = [
    {
        'id':2001,
        'question':`What service is for Accessing data frequently and/or storage for brief periods?`,
        'answers': [
            {'id':0, 'desc':'Standard Storage'},
            {'id':1, 'desc':'Nearline Storage'},
            {'id':2, 'desc':'Coldline Storage'},
            {'id':3, 'desc':'Archive Storage'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':'Standard Storage is for Frequent Access ("hot" data) and/or brief storage'},
            {'id':1, 'desc':'Nearline Storage is Read/modify data ≤ once per month'},
            {'id':2, 'desc':'Coldline Storage Read/modify data no more than once a quarter'},
            {'id':3, 'desc':'Archive Storage Read/modify data < once a year'},
        ]
    },
    {
        'id':2002,
        'question':`What is the Minimum duration for Archive Storage?`,
        'answers': [
            {'id':0, 'desc':'None'},
            {'id':1, 'desc':'30 Days'},
            {'id':2, 'desc':'90 Days'},
            {'id':3, 'desc':'365 Days'},
        ],
        'answerId': [3],
        'rationale': [
            {'id':3, 'desc':'Archive Storage Read/modify data < once a year, with a minium duration of 365 days.'},
        ]
    },
    {
        'id':2003,
        'question':`A client has data that they need to access less than once a month. What storage is best?`,
        'answers': [
            {'id':0, 'desc':'Standard Storage'},
            {'id':1, 'desc':'Nearline Storage'},
            {'id':2, 'desc':'Coldline Storage'},
            {'id':3, 'desc':'Archive Storage'},
        ],
        'answerId': [1],
        'rationale': [
            {'id':1, 'desc':'Nearline storage allows for read/modify data ≤ once per month'},
        ]
    },
    {
        'id':2004,
        'question':`Your developers want a compute option that allows them to develop for web and mobile applications. The team knows Java and Go. What is the best Compute Option?`,
        'answers': [
            {'id':0, 'desc':'Compute Engine IaaS'},
            {'id':1, 'desc':'Google Kubernetes Engine Hybrid'},
            {'id':2, 'desc':'App Engine PaaS'},
            {'id':3, 'desc':'Serverless Cloud Functions'},
        ],
        'answerId': [2],
        'rationale': [
            {'id':3, 'desc':'App Engine PaaS is for web and mobile applications and supports Java and Go languages.'},
            {'id':0, 'desc':'Compute engine is for General computing workloads. It does not fit the web and mobile requirement.'},
            {'id':1, 'desc':'GKE is for Container based workloads. It does not fit the web and mobile requirement.'},
            {'id':2, 'desc':'Cloud functions are for short lived code responding to events, not a good fit for hosting application code.'},
        ]
    },
    {
        'id':2005,
        'question':`Unmanaged Instance Groups`,
        'answers': [
            {'id':0, 'desc':'Collect different kinds of instances. Usually this is done for management of "lift and shift" existing designs, and it is not recommended because it does not make the best use of the features available in cloud.'},
            {'id':1, 'desc':'Are all the same kind of instance, meaning that the type can be defined by an Instance Template and Autoscaling is available'},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':2006,
        'question':`Zonal and Regional Instance Groups are examples of`,
        'answers': [
            {'id':0, 'desc':'Unmanaged Instance Groups'},
            {'id':1, 'desc':'Managed Instance Groups'},
        ],
        'answerId': [1],
        'rationale': [
            {'id':1, 'desc':'Zonal and Regional Instance Groups are types of Managed Instance Groups'},
            {'id':0, 'desc':'Unmanaged Instance Groups colled different types of instances and are not managed or templated.'},
        ]
    },
    {
        'id':2007,
        'question':`Use ______ to keep all the instances in the same zone, and provide consistent network location when the instances must communicate with similar latency and avoid zone-to-zone transfer`,
        'answers': [
            {'id':0, 'desc':'Unmanaged Instance Groups'},
            {'id':1, 'desc':'Zonal Managed Instance Groups'},
            {'id':2, 'desc':'Regional Managed Instance Groups'},
            {'id':3, 'desc':'Managed Network Instance Groups'},
        ],
        'answerId': [1],
        'rationale': []
    },
    {
        'id':2008,
        'question':`Autoscaling works with all types of Instance Groups`,
        'answers': [
            {'id':0, 'desc':'True'},
            {'id':1, 'desc':'False'},
        ],
        'answerId': [1],
        'rationale': [
            {'id':1, 'desc':'Autoscaling works with managed instance groups (MIGs) only. Unmanaged instance groups are not supported.'},
        ]
    },
    {
        'id':2009,
        'question':`Small stateless servers`,
        'answers': [
            {'id':0, 'desc':'Increase reliability and scalability'},
            {'id':1, 'desc':'Reduce complexity and latency'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':'Small stateless servers increase reliability and scalability'},
            {'id':1, 'desc':'Large stateful servers reduce complexity and latency'},
        ]
    },
    {
        'id':2010,
        'question':`If you want visiblity to servers, automation and to eliminate overhead, you should use`,
        'answers': [
            {'id':0, 'desc':'A Managed Service'},
            {'id':1, 'desc':'A Serverless Service'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':'A Managed Service gives you visibility to servers but limited control. You give up control for automation. Great for popular use-cases and eliminating overhead.'},
            {'id':1, 'desc':'Serverless Services completely hide all servers. Generally, more fast, scalable, and efficient than you could create on your own.'},
        ]
    },
    {
        'id':2011,
        'question':`The most important control over resource consumption and costs is writing a query that controls the amount of data processed. In general, this is done with..`,
        'answers': [
            {'id':0, 'desc':'A LIMIT which omits the data from the final results at the end of the job'},
            {'id':1, 'desc':'A SELECT by choosing subsets of data at the start of a job'},
        ],
        'answerId': [1],
        'rationale': [
            {'id':1, 'desc':'SELECT by choosing subsets of data at the start of a job rather than by using LIMIT which only omits data from the final results at the end of a job'},
        ]
    },
    {
        'id':2012,
        'question':`A fully managed service for managing devices. This includes registration, authentication, and authorization inside the Google Cloud resource hierarchy as well as device metadata stored in the cloud, and the ability to send device configuration from the service to devices.`,
        'answers': [
            {'id':0, 'desc':'IoT Core'},
            {'id':1, 'desc':'Pub/Sub'},
            {'id':2, 'desc':'Dataflow'},
            {'id':3, 'desc':'Cloud Functions'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':1, 'desc':'IoT Core provides a fully managed service for managing devices. This includes registration, authentication, and authorization inside the Google Cloud resource hierarchy as well as device metadata stored in the cloud, and the ability to send device configuration from the service to devices.'},
        ]
    },
    {
        'id':2013,
        'question':`You need high-volume data processing pipelines for IoT - what service would fit your needs?`,
        'answers': [
            {'id':0, 'desc':'Dataflow'},
            {'id':1, 'desc':'Pub/Sub'},
            {'id':2, 'desc':'IoT Core Device Manager'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':'Dataflow provides the open Apache Beam programming model as a managed service for processing data in multiple ways, including batch operations, extract-transform-load (ETL) patterns, and continuous, streaming computation. Dataflow can be particularly useful for managing the high-volume data processing pipelines required for IoT scenarios. Dataflow is also designed to integrate seamlessly with the other Google Cloud services you choose for your pipeline.'},
        ]
    },
    {
        'id':2014,
        'question':`Which network feature could help a company meet its goals to expand service to Asia while reducing latency?`,
        'answers': [
            {'id':0, 'desc':'Cloud NAT'},
            {'id':1, 'desc':'NetworkTCP/UDP'},
            {'id':2, 'desc':'Cloud Router'},
            {'id':3, 'desc':'Cloud CDN'},
        ],
        'answerId': [3],
        'rationale': [
            {'id':3, 'desc':`Cloud CDN will enable a company to expand its online presence with a single IP address and global reach leveraging Google's global network`},
            {'id':0, 'desc':`Cloud NAT enables you to provision your application instances without public IP addresses, while also allowing them to access the internet, but it won’t reduce the latency associated with web and video content delivery, with global scale and reach.`},
            {'id':1, 'desc':`Network load balancing is internal only. It can help scale the service but not necessarily expand its reach.`},
            {'id':2, 'desc':`Cloud Router discovers changed network topology using BGP. That might be valuable if they open offices in Asia, but that doesn't directly expand the services.`},
        ]
    },
];

export const setB = [
    {
        'id':2200,
        'question':`Your company has decided to make a major revision of their API in order to create better experiences for their developers. They need to keep the old version of the API available and deployable, while allowing new customers and testers to try out the new API. They want to keep the same SSL and DNS records in place to serve both APIs.
        What should they do?`,
        'answers': [
            {'id':0, 'desc':'Configure a new load balancer for the new version of the API'},
            {'id':1, 'desc':'Reconfigure old clients to use a new endpoint for the new API'},
            {'id':2, 'desc':'Have the old API forward traffic to the new API based on the path'},
            {'id':3, 'desc':'Use separate backend pools for each API path behind the load balancer'},
        ],
        'answerId': [3],
        'rationale': []
    },
    {
        'id':2201,
        'question':`Your company plans to migrate a multi-petabyte data set to the cloud. The data set must be available 24hrs a day. Your business analysts have experience only with using a SQL interface.
        How should you store the data to optimize it for ease of analysis?`,
        'answers': [
            {'id':0, 'desc':'Load data into Google BigQuery'},
            {'id':1, 'desc':'Insert data into Google Cloud SQL'},
            {'id':2, 'desc':'Put flat files into Google Cloud Storage'},
            {'id':3, 'desc':'Stream data into Google Cloud Datastore'},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':2202,
        'question':`The operations manager asks you for a list of recommended practices that she should consider when migrating a J2EE application to the cloud.
        Which three practices should you recommend? Select an automation framework to reliably provision the cloud infrastructure, Port the application code to run on Google App Engine and...`,
        'answers': [
            {'id':0, 'desc':'Integrate Cloud Dataflow into the application to capture real-time metrics'},
            {'id':2, 'desc':'Instrument the application with a monitoring tool like Stackdriver Debugger'},
            {'id':3, 'desc':'Deploy a continuous integration tool with automated testing in a staging environment'},
            {'id':4, 'desc':'Migrate from MySQL to a managed NoSQL database like Google Cloud Datastore or Bigtable'},
        ],
        'answerId': [3],
        'rationale': []
    },
    {
        'id':2203,
        'question':`A news feed web service has the following code running on Google App Engine. During peak load, users report that they can see news articles they already viewed.
        What is the most likely cause of this problem?`,
        'img':code0007100001,
        'answers': [
            {'id':0, 'desc':'The session variable is local to just a single instance'},
            {'id':1, 'desc':'The session variable is being overwritten in Cloud Datastore'},
            {'id':2, 'desc':' The URL of the API needs to be modified to prevent caching'},
            {'id':3, 'desc':'The HTTP Expires header needs to be set to -1 stop caching'},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':2204,
        'question':`An application development team believes their current logging tool will not meet their needs for their new cloud-based product. They want a better tool to capture errors and help them analyze their historical log data. You want to help them find a solution that meets their needs.
        What should you do?`,
        'answers': [
            {'id':0, 'desc':'Direct them to download and install the Google StackDriver logging agent'},
            {'id':1, 'desc':'Send them a list of online resources about logging best practices'},
            {'id':2, 'desc':'Help them define their requirements and assess viable logging tools'},
            {'id':3, 'desc':'Help them upgrade their current tool to take advantage of any new features'},
        ],
        'answerId': [2],
        'rationale': []
    },
    {
        'id':2205,
        'question':`You need to reduce the number of unplanned rollbacks of erroneous production deployments in your company's web hosting platform. Improvement to the QA/
        Test processes accomplished an 80% reduction.
        Which additional two approaches can you take to further reduce the rollbacks? 1. Introduce a green-blue deployment model and...`,
        'answers': [
            {'id':0, 'desc':'Fragment the monolithic platform into microservices'},
            {'id':1, 'desc':'Replace the QA environment with canary releases'},
            {'id':2, 'desc':'Reduce the platform\'s dependency on relational database systems'},
            {'id':3, 'desc':'Replace the platform\'s relational database systems with a NoSQL database'},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':2206,
        'question':`To reduce costs, the Director of Engineering has required all developers to move their development infrastructure resources from on-premises virtual machines
        (VMs) to Google Cloud Platform. These resources go through multiple start/stop events during the day and require state to persist. You have been asked to design the process of running a development environment in Google Cloud while providing cost visibility to the finance department.
        Which two steps should you take? 1. Apply VM CPU utilization label and include it in the BigQuery billing export and...`,
        'answers': [
            {'id':0, 'desc':'Use the - -no-auto-delete flag on all persistent disks and stop the VM'},
            {'id':1, 'desc':'Use the - -auto-delete flag on all persistent disks and terminate the VM'},
            {'id':2, 'desc':'Use Google BigQuery billing export and labels to associate cost to groups'},
            {'id':3, 'desc':'Store all state into local SSD, snapshot the persistent disks, and terminate the VM'},
            {'id':4, 'desc':'Store all state in Google Cloud Storage, snapshot the persistent disks, and terminate the VM'},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':2207,
        'question':`The operations manager asks you for a list of recommended practices that she should consider when migrating a J2EE application to the cloud.
        Which three practices should you recommend? Port the application code to run on Google App Engine, Deploy a continuous integration tool with automated testing in a staging environment and...`,
        'answers': [
            {'id':0, 'desc':'Integrate Cloud Dataflow into the application to capture real-time metrics'},
            {'id':1, 'desc':'Instrument the application with a monitoring tool like Stackdriver Debugger'},
            {'id':2, 'desc':'Select an automation framework to reliably provision the cloud infrastructure'},
            {'id':3, 'desc':'Migrate from MySQL to a managed NoSQL database like Google Cloud Datastore or Bigtable'},
        ],
        'answerId': [2],
        'rationale': []
    },
    {
        'id':2208,
        'question':`Your company wants to track whether someone is present in a meeting room reserved for a scheduled meeting. There are 1000 meeting rooms across 5 offices on 3 continents. Each room is equipped with a motion sensor that reports its status every second. The data from the motion detector includes only a sensor ID and several different discrete items of information. Analysts will use this data, together with information about account owners and office locations.
        Which database type should you use?`,
        'answers': [
            {'id':0, 'desc':'Flat file'},
            {'id':1, 'desc':'NoSQL'},
            {'id':2, 'desc':'Relational'},
            {'id':3, 'desc':'Blobstore'},
        ],
        'answerId': [1],
        'rationale': [
            {'id':1, 'desc':`Relational databases were not designed to cope with the scale and agility challenges that face modern applications, nor were they built to take advantage of the commodity storage and processing power available today.`}
        ]
    },
    {
        'id':2209,
        'question':`You set up an autoscaling instance group to serve web traffic for an upcoming launch. After configuring the instance group as a backend service to an HTTP(S) load balancer, you notice that virtual machine (VM) instances are being terminated and re-launched every minute. The instances do not have a public IP address.
        You have verified the appropriate web response is coming from each instance using the curl command. You want to ensure the backend is configured correctly.
        What should you do?
        `,
        'answers': [
            {'id':0, 'desc':'Ensure that a firewall rules exists to allow source traffic on HTTP/HTTPS to reach the load balancer.'},
            {'id':1, 'desc':'Assign a public IP to each instance and configure a firewall rule to allow the load balancer to reach the instance public IP.'},
            {'id':2, 'desc':'Ensure that a firewall rule exists to allow load balancer health checks to reach the instances in the instance group.'},
            {'id':3, 'desc':'Create a tag on each instance with the name of the load balancer. Configure a firewall rule with the name of the load balancer as the source and the instance tag as the destination.'},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':2210,
        'question':`You write a Python script to connect to Google BigQuery from a Google Compute Engine virtual machine. The script is printing errors that it cannot connect to
        BigQuery.
        What should you do to fix the script?`,
        'answers': [
            {'id':0, 'desc':'Install the latest BigQuery API client library for Python'},
            {'id':1, 'desc':'Run your script on a new virtual machine with the BigQuery access scope enabled'},
            {'id':2, 'desc':'Create a new service account with BigQuery access and execute your script with that user'},
            {'id':3, 'desc':'Install the bq component for gcloud with the command gcloud components install bq.'},
        ],
        'answerId': [1],
        'rationale': [
            {'id':1, 'desc':``}
        ]
    },
    {
        'id':2211,
        'question':`Your customer is moving an existing corporate application to Google Cloud Platform from an on-premises data center. The business owners require minimal user disruption. There are strict security team requirements for storing passwords.
        What authentication strategy should they use?`,
        'answers': [
            {'id':0, 'desc':'Use G Suite Password Sync to replicate passwords into Google'},
            {'id':1, 'desc':'Federate authentication via SAML 2.0 to the existing Identity Provider'},
            {'id':2, 'desc':'Provision users in Google using the Google Cloud Directory Sync tool'},
            {'id':3, 'desc':'Ask users to set their Google password to match their corporate password'},
        ],
        'answerId': [2],
        'rationale': [
            {'id':2, 'desc':`The global Directory is available to both Cloud Platform and G Suite resources and can be provisioned by a number of means. Provisioned users can take advantage of rich authentication features including single sign-on (SSO), OAuth, and two-factor verification.
            You can provision users automatically using one of the following tools and services:
            Google Cloud Directory Sync (GCDS)`}
        ]
    },
    {
        'id':2212,
        'question':`Your company has successfully migrated to the cloud and wants to analyze their data stream to optimize operations. They do not have any existing code for this analysis, so they are exploring all their options. These options include a mix of batch and stream processing, as they are running some hourly jobs and live- processing some data as it comes in.
        Which technology should they use for this?`,
        'answers': [
            {'id':0, 'desc':'Google Cloud Dataproc'},
            {'id':1, 'desc':'Google Cloud Dataflow'},
            {'id':2, 'desc':'Google Container Engine with Bigtable'},
            {'id':3, 'desc':'Google Compute Engine with Google BigQuery'},
        ],
        'answerId': [1],
        'rationale': [
            {'id':1, 'desc':`Cloud Dataflow is a fully-managed service for transforming and enriching data in stream (real time) and batch (historical) modes with equal reliability and expressiveness -- no more complex workarounds or compromises needed.`}
        ]
    },
    {
        'id':2213,
        'question':`Your customer is receiving reports that their recently updated Google App Engine application is taking approximately 30 seconds to load for some of their users.
        This behavior was not reported before the update.
        What strategy should you take?`,
        'answers': [
            {'id':0, 'desc':'Work with your ISP to diagnose the problem'},
            {'id':1, 'desc':'Open a support ticket to ask for network capture and flow data to diagnose the problem, then roll back your application'},
            {'id':2, 'desc':'Roll back to an earlier known good release initially, then use Stackdriver Trace and Logging to diagnose the problem in a development/test/staging environment'},
            {'id':3, 'desc':'Roll back to an earlier known good release, then push the release again at a quieter period to investigate. Then use Stackdriver Trace and Logging to diagnose the problem'},
        ],
        'answerId': [2],
        'rationale': [
            {'id':2, 'desc':`Stackdriver Logging allows you to store, search, analyze, monitor, and alert on log data and events from Google Cloud Platform and Amazon Web Services
            (AWS). Our API also allows ingestion of any custom log data from any source. Stackdriver Logging is a fully managed service that performs at scale and can ingest application and system log data from thousands of VMs. Even better, you can analyze all that log data in real time.`}
        ]
    },
    {
        'id':2214,
        'question':`A production database virtual machine on Google Compute Engine has an ext4-formatted persistent disk for data files. The database is about to run out of storage space.
        How can you remediate the problem with the least amount of downtime?`,
        'answers': [
            {'id':0, 'desc':'In the Cloud Platform Console, increase the size of the persistent disk and use the resize2fs command in Linux.'},
            {'id':1, 'desc':'Shut down the virtual machine, use the Cloud Platform Console to increase the persistent disk size, then restart the virtual machine'},
            {'id':2, 'desc':'In the Cloud Platform Console, increase the size of the persistent disk and verify the new space is ready to use with the fdisk command in Linux'},
            {'id':3, 'desc':'In the Cloud Platform Console, create a new persistent disk attached to the virtual machine, format and mount it, and configure the database service to move the files to the new disk'},
            {'id':4, 'desc':'In the Cloud Platform Console, create a snapshot of the persistent disk restore the snapshot to a new larger disk, unmount the old disk, mount the new disk and restart the database service'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':`On Linux instances, connect to your instance and manually resize your partitions and file systems to use the additional disk space that you added.
            Extend the file system on the disk or the partition to use the added space. If you grew a partition on your disk, specify the partition. If your disk does not have a partition table, specify only the disk ID. sudo resize2fs /dev/[DISK_ID][PARTITION_NUMBER] where [DISK_ID] is the device name and [PARTITION_NUMBER] is the partition number for the device where you are resizing the file system.`}
        ]
    },
    {
        'id':2215,
        'question':`Your application needs to process credit card transactions. You want the smallest scope of Payment Card Industry (PCI) compliance without compromising the ability to analyze transactional data and trends relating to which payment methods are used.
        How should you design your architecture?`,
        'answers': [
            {'id':0, 'desc':'Create a tokenizer service and store only tokenized data'},
            {'id':1, 'desc':'Create separate projects that only process credit card data'},
            {'id':2, 'desc':'Create separate subnetworks and isolate the components that process credit card data'},
            {'id':3, 'desc':'Streamline the audit discovery phase by labeling all of the virtual machines (VMs) that process PCI data'},
            {'id':4, 'desc':'Enable Logging export to Google BigQuery and use ACLs and views to scope the data shared with the auditor'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':`https://www.sans.org/reading-room/whitepapers/compliance/ways-reduce-pci-dss-audit-scope-tokenizing-cardholder-data-33194`}
        ]
    }
];

export const setC = [
    {
        'id':2400,
        'question':`Company requires the data stored in BigQuery tables to be deleted after 3 years. The table will be used by reporting system and should not impacted. What will be your solution ?`,
        'answers': [
            {'id':0, 'desc':'Use BigQuery Dataset table expiration configuration'},
            {'id':1, 'desc':'Use Time partitioning for table and use partitioning expiration time configuration either at Dataset or at table'},
            {'id':2, 'desc':'Use Google Scheduler to delete old data'},
            {'id':3, 'desc':'Use table level expiration configuration'},
        ],
        'answerId': [1],
        'rationale': [
            {'id':1, 'desc':`https://cloud.google.com/bigquery/docs/best-practices-storage Configure the default table expiration for your datasets, configure the expiration time for your tables, and configure the partition expiration for partitioned tables.`}
        ]
    },
    {
        'id':2401,
        'question':`Mountkirk2020 wants to use jenkins pipelines to build and deploy code. They have multiple developer for game backend and native applications. Release management want to make sure that release to production only triggered after verification, How they can achieve this?`,
        'answers': [
            {'id':0, 'desc':'Use Spinnaker branch'},
            {'id':1, 'desc':'Use Jenkins branc'},
            {'id':2, 'desc':'Use Spinnaker tags instead of Jenkins'},
            {'id':3, 'desc':'Use Jenkins discover tags'},
        ],
        'answerId': [3],
        'rationale': [
            {'id':3, 'desc':'https://cloud.google.com/solutions/jenkins-on-kubernetes-engine Spinnaker tags can be used as condition before release it in production.  More information can be found in Jenkins website.'},
        ]
    },
    {
        'id':2402,
        'question':`Your company has multiple on-premises systems that serve as sources for reporting. The data has not been maintained well and has become degraded over time.
        You want to use Google-recommended practices to detect anomalies in your company data. What should you do?`,
        'answers': [
            {'id':0, 'desc':'Upload your files into Cloud Storage. Use Cloud Dataprep to explore and clean your data.'},
            {'id':1, 'desc':'Connect Cloud Dataprep to your on-premises systems. Use Cloud Dataprep to explore and clean your data.'},
            {'id':2, 'desc':'Upload your files into Cloud Storage. Use Cloud Datalab to explore and clean your data'},
            {'id':3, 'desc':'Connect Cloud Datalab to your on-premises systems. Use Cloud Datalab to explore and clean your data.'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':'https://cloud.google.com/dataprep/docs/quickstarts/quickstart-dataprep Cloud Dataprep can take data from Cloud Storage'},
        ]
    },
    {
        'id':2403,
        'question':`You have deployed an application to Kubernetes Engine, and are using the Cloud SQL proxy container to make the Cloud SQL - MySQL database available to the services running on Kubernetes. You are notified that the application is reporting database connection issues. Your have asked to provide root cause analysis, What will be your solution?`,
        'answers':[
            {'id':0, 'desc':`Validate that the Service Account used by the Cloud SQL proxy container still has the Cloud Build Editor role.`},
            {'id':1, 'desc':`In the GCP Console, navigate to Stackdriver Logging. Consult logs for Kubernetes Engine and Cloud SQL.`},
            {'id':2, 'desc':`Use gcloud sql instances restart.`},
            {'id':3, 'desc':`In the GCP Console, navigate to Cloud SQL. Restore the latest backup. Use kubectl to restart all pods.`},
        ],
        'answerId':0,
        'rationale': [
            {'id':0, 'desc':`You will need to check if there is any problems with permissions as the applications was running already and issues started`},
        ]
    },
    {
        'id':2404,
        'question':`You are working in a highly secured environment where public Internet access from the Compute Engine VMs is not allowed. You do not yet have a VPN connection to access an on-premises file server. You need to install specific software on a Compute Engine instance. How should you install the software?`,
        'answers': [
            {'id':0, 'desc':`Upload the required installation files to Cloud Storage and use firewall rules to block all traffic except the IP address range for Cloud Storage. Download the files to the VM using gsutil.`},
            {'id':1, 'desc':`Upload the required installation files to Cloud Source Repositories and use firewall rules to block all traffic except the IP address range for Cloud Source Repositories. Download the files to the VM using gsutil.`},
            {'id':2, 'desc':`Upload the required installation files to Cloud Source Repositories. Configure the VM on a subnet with a Private Google Access subnet. Assign only an internal IP address to the VM. Download the installation files to the VM using gcloud.`},
            {'id':3, 'desc':`Upload the required installation files to Cloud Storage. Configure the VM on a subnet with a Private Google Access subnet. Assign only an internal IP address to the VM. Download the installation files to the VM using gsutil.`},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':2405,
        'question':`You are tasked to migrate on prem 100 TB of data into Google Cloud, You have 1 Gbps connection with GCP. You want to use Cloud Storage and follow Google-recommended practices. What should you do?`,
        'answers': [
            {'id':0, 'desc':'Install gsutil on each server containing data. Use streaming transfers to upload the data into Cloud Storage.'},
            {'id':1, 'desc':'Move your data onto a Transfer Appliance. Use Cloud Dataprep to decrypt the data into Cloud Storage.'},
            {'id':2, 'desc':'Install gsutil on each server that contains data. Use resumable transfers to upload the data into Cloud Storage.'},
            {'id':3, 'desc':'Move your data onto a Transfer Appliance. Use a Transfer Appliance Rehydrator to decrypt the data into Cloud Storage.'},
        ],
        'answerId': [2],
        'rationale': [{
            'id':2, 'desc':'https://cloud.google.com/solutions/migration-to-google-cloud-transferring-your-large-datasets',
        }]
    },
    {
        'id':2406,
        'question':`Company want to migrate game analytics transformation engine (ETL) for both stream and file upload by mobile to google recommended transformation engine, What will be best choice looking at Mountkirk games case studies?`,
        'answers': [
            {'id':0, 'desc':'Cloud Dataflow'},
            {'id':1, 'desc':'Cloud Datalab'},
            {'id':2, 'desc':'Cloud Dataproc'},
            {'id':3, 'desc':'Cloud composer'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':'The implementation can be treated as green field (rip and replace) and Cloud Dataflow (Apache Beam) is best suitable (google recommended)'}
        ]
    },
    {
        'id':2407,
        'question':`What are two of the actions you can take to troubleshoot a virtual machine instance that won't start up at all?`,
        'options': ['1. Increase the CPU and memory on the instance by changing the machine type.',
        '2. Examine your virtual machine instance\'s serial port output.',
        '3. Connect to your virtual machine instance using SSH.',
        '4. Validate that your disk has a valid file system.'],
        'answers': [
            {'id':0, 'desc':'1 & 2'},
            {'id':1, 'desc':'2 & 3'},
            {'id':2, 'desc':'1 & 4'},
            {'id':3, 'desc':'3 & 4'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':'https://cloud.google.com/compute/docs/troubleshooting/vm-startup'}
        ]
    },
    {
        'id':2408,
        'question':`You are tasked to setup virtual private network between your on-prem servers(network) with Google Cloud Platform and have the routes automatically updated when the network topology changes, What is the minimal number of each type of component you need to implement?`,
        'answers': [
            {'id':0, 'desc':'2 Cloud VPN Gateways and 1 Cloud Router'},
            {'id':1, 'desc':'1 Cloud VPN Gateway, 1 Peer Gateway, and 1 Cloud Router'},
            {'id':2, 'desc':'2 Cloud VPN Gateways per region and 1 Peer Gateway'},
            {'id':3, 'desc':'2 Peer Gateways and 1 Cloud Router'},
        ],
        'answerId': [1],
        'rationale': []
    },
    {
        'id':2409,
        'question':`Company has python based watchdog application runs steady compute (  0.1 vCPU , and 128 MB Memory), Which set of steps should you take? Note : Consider management of infrastructure as well as cost while making suggestions.`,
        'answers': [
            {'id':0, 'desc':'1. Create a managed instance group with f1-micro type machines. 2. Use a startup script to clone the repository, check out the production branch, install the dependencies, and start the Python app. 3. Restart the instances to automatically deploy new production releases'},
            {'id':1, 'desc':'1. Create a GKE cluster with n1-standard-4 type machines. 2. Build a Docker image from the master branch with all of the dependencies, and tag it with "latest". 3. Create a Kubernetes Deployment in the default namespace with the imagePullPolicy set to "Always". Restart the pods to automatically deploy new production releases.'},
            {'id':2, 'desc':'1. Create a Kubernetes Engine cluster with n1-standard-1 type machines. 2. Build a Docker image from the production branch with all of the dependencies, and tag it with the version number. 3. Create a Kubernetes Deployment with the imagePullPolicy set to "IfNotPresent" in the staging namespace, and then promote it to the production namespace after testing.'},
            {'id':3, 'desc':'1. Create a managed instance group with n1-standard-1 type machines. 2. Build a Compute Engine image from the production branch that contains all of the dependencies and automatically starts the Python app. 3. Rebuild the Compute Engine image, and update the instance template to deploy new production releases.'},
        ],
        'answerId': [3],
        'rationale': []
    },
    {
        'id':2410,
        'question':`What option does Cloud SQL offer to help with high availability?`,
        'answers': [
            {'id':0, 'desc':'Failover replicas'},
            {'id':1, 'desc':'Point-in-time recover'},
            {'id':2, 'desc':'The AlwaysOn setting'},
            {'id':3, 'desc':'Snapshots'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':'https://cloud.google.com/sql/docs/mysql/high-availability#failover-overview'}
        ]
    },
    {
        'id':2411,
        'question':`You have web application which has several VM instances running within a VPC. You want to restrict communications between instances to only the paths and ports you authorize, but you don't want to rely on static IP addresses or subnets because the app can autoscale. How should you restrict communications?`,
        'answers': [
            {'id':0, 'desc':'Use Cloud DNS'},
            {'id':1, 'desc':'Use Service account and configure the web application using particular service account. '},
            {'id':2, 'desc':'Use firewall rules based on network tags attached to Compute Engine instance. '},
            {'id':3, 'desc':'Use separate VPCs'},
        ],
        'answerId': [2],
        'rationale': [
            {'id':2, 'desc':'Firewall rules tags are used to restrict communication between VMs.'},]
    },
    {
        'id':2412,
        'question':`Which of the follow products will allow you to host a static website?`,
        'answers': [
            {'id':0, 'desc':'Cloud SDK'},
            {'id':1, 'desc':'Cloud Shell'},
            {'id':2, 'desc':'Cloud Endpoints'},
            {'id':3, 'desc':'Cloud Storage'},
        ],
        'answerId': [3],
        'rationale': []
    },
    {
        'id':2413,
        'question':`An engineer is designing applications that needs to use websockets and HTTP sessions that are not distributed across the web servers. You want to help him ensure his application will run properly on Google Cloud Platform.
        What is your recommendation ?`,
        'answers': [
            {'id':0, 'desc':'Meet with the cloud operations team and the engineer to discuss load balancer options'},
            {'id':1, 'desc':'Review the encryption requirements for websocket connections with the security team'},
            {'id':2, 'desc':'Help the engineer to convert his websocket code to use HTTP streaming'},
            {'id':3, 'desc':'Help the engineer redesign the application to use a distributed user session service that does not rely on websockets and HTTP sessions'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':'HTTP Load Balancer supports Websocket'},]
    },
    {
        'id':2414,
        'question':`Company wants to migrate existing Game Analytics (MySQL) to Google Cloud Platform and wants to follow Google Recommended best practices, What will be your recommendation to create realtime analytics solution for time series data to sale blastups, What will be your choice of database for this use case ?`,
        'answers': [
            {'id':0, 'desc':'Cloud SQL'},
            {'id':1, 'desc':'Cloud BigQuery'},
            {'id':2, 'desc':'Cloud BigTable'},
            {'id':3, 'desc':'Cloud Dataproc'},
        ],
        'answerId': [2],
        'rationale': [
            {'id':2, 'desc':'Cloud Bigtable used for analytics for low latency & for time series data requirements.'},]
    },
    {
        'id':2415,
        'question':`You have an application deployed on Kubernetes Engine using a Deployment named echo-deployment. The deployment is exposed using a Service called echo- service. You need to perform an update to the application with minimal downtime to the application. What should you do?`,
        'answers': [
            {'id':0, 'desc':'Use the rolling update functionality of the Instance Group behind the Kubernetes cluster'},
            {'id':1, 'desc':'Update the service yaml file which the new container image. Use kubectl delete service/echo-service and kubectl create ""f <yaml-file>'},
            {'id':2, 'desc':'Use kubectl set image deployment echo-deployment <new-image>'},
            {'id':3, 'desc':'Update the deployment yaml file with the new container image. Use kubectl delete deployment/echo-deployment and kubectl create ""f <yaml-file>'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':'You can use kubectl to update application image: https://cloud.google.com/kubernetes-engine/docs/how-to/updating-apps#updating_an_application'},
        ]
    },
];

export const setD = [
    {
        'id':2501,
        'question':`For this question, refer to the Mountkirk Games case study.
        Your company is an industry-leading ISTQB certified software testing firm, and Mountkirk Games has recently partnered with your company for designing their new testing strategy. Given the experience with scaling issues in the existing solution, Mountkirk Games is concerned about the ability of the new backend to scale based on traffic and has asked for your opinion on how to design their new test strategy to ensure scaling issues do not repeat. What should you suggest?`,
        'answers': [
            {'id':0, 'desc':`Modify the test strategy to scale tests well beyond the current approach.`},
            {'id':1, 'desc':`Update the test strategy to replace unit tests with end to end integration tests.`},
            {'id':2, 'desc':`Modify the test strategy to run tests directly in production after each new release.`},
            {'id':3, 'desc':`Update the test strategy to test all infrastructure components in Google Cloud Platform.`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2502,
        'question':`For this question, refer to the Mountkirk Games case study.
        Mountkirk Games anticipates its new game to be hugely popular and expects this to generate vast quantities of time series data. Mountkirk Games is keen on selecting a managed storage service for this time-series data. What GCP service would you recommend?`,
        'answers': [
            {'id':0, 'desc':`Cloud Bigtable.`},
            {'id':1, 'desc':`Cloud Spanner.`},
            {'id':2, 'desc':`Cloud Firestore.`},
            {'id':3, 'desc':`Cloud Memorystore.`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2503,
        'question':`For this question, refer to the Mountkirk Games case study.
        Mountkirk Games has redesigned parts of its game backend into multiple microservices that operate as HTTP (REST) APIs. Taking into consideration the technical requirements for the game backend platform as well as the business requirements, how should you design the game backend on Google Cloud platform?`,
        'answers': [
            {'id':0, 'desc':`Use a Layer 4 (TCP) Load Balancer and Google Compute Engine VMs in a Managed Instances Group (MIG) with instances in multiple zones in multiple regions.`},
            {'id':1, 'desc':`Use a Layer 4 (TCP) Load Balancer and Google Compute Engine VMs in a Managed Instances Group (MIG) with instances restricted to a single zone in multiple regions.`},
            {'id':2, 'desc':`Use a Layer 7 (HTTPS) Load Balancer and Google Compute Engine VMs in a Managed Instances Group (MIG) with instances in multiple zones in multiple regions.`},
            {'id':3, 'desc':`Use a Layer 7 (HTTPS) Load Balancer and Google Compute Engine VMs in a Managed Instances Group (MIG) with instances restricted to a single zone in multiple regions.`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2504,
        'question':`For this question, refer to the Mountkirk Games case study.
        Taking into consideration the technical requirements for the game backend platform as well as the game analytics platform, where should you store data in Google Cloud platform?`,
        'answers': [
            {'id':0, 'desc':`1. For time-series data, use Cloud SQL. 2. For historical data queries, use Cloud Bigtable.`},
            {'id':1, 'desc':`1. For time-series data, use Cloud SQL. 2. For historical data queries, use Cloud Spanner.`},
            {'id':2, 'desc':`1. For time-series data, use Cloud BigTable. 2. For historical data queries, use BigQuery.`},
            {'id':3, 'desc':`1. For time-series data, use Cloud BigTable. 2. For historical data queries, use Cloud BigQuery. 3. For transactional data, use Cloud Spanner.`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2505,
        'question':`For this question, refer to the Mountkirk Games case study.
        Your company is an industry-leading ISTQB certified software testing firm, and Mountkirk Games has recently partnered with your company for designing their new testing strategy. Mountkirk Games is concerned at the potential disruption caused by solar storms to its business. A solar storm last month resulted in downgraded mobile network coverage and slow upload speeds for a vast majority of mobile users in the Mediterranean. As a result, their analytics platform struggled to cope with the late arrival of data from these mobile devices. Mountkirk Games has asked you for your suggestions on avoiding such issues in future. What should you recommend?`,
        'answers': [
            {'id':0, 'desc':`Update the test strategy to include fault injection software and introduce latency instead of faults.`},
            {'id':1, 'desc':`Update the test strategy to test from multiple mobile phone emulators from all GCP regions.`},
            {'id':2, 'desc':`Update the test strategy to introduce random amounts of delay before processing the uploaded analytics files.`},
            {'id':3, 'desc':`Update the test strategy to gather latency information from 1% of users and use this to simulate latency on production-like volume.`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2506,
        'question':`For this question, refer to the TerramEarth case study.
        TerramEarth wants to preemptively stock replacement parts and reduce the unplanned downtime of their vehicles to less than one week. The CTO sees an Al-driven solution being the future of this prediction. Still, for the time being, the planis to have the analysts carry out the analysis by querying all data from a central location and make predictions. Which of the below designs would give the analysts the ability to query data from a central location?`,
        'answers': [
            {'id':0, 'desc':`HTTP(s) Load Balancer, GKE on Anthos, Pub/Sub, Dataflow, BigQuery.`},
            {'id':1, 'desc':`HTTP(s) Load Balancer, GKE on Anthos, Dataflow, BigQuery.`},
            {'id':2, 'desc':`HTTP(s) Load Balancer, GKE on Anthos, BigQuery.`},
            {'id':3, 'desc':`App Engine Flexible, Pub/Sub, Dataflow, BigQuery.`},
            {'id':4, 'desc':`App Engine Flexible, Pub/Sub, Dataflow, Cloud SQL.`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2507,
        'question':`For this question, refer to the TerramEarth case study.
        You work for a consulting firm that specializes in providing next-generation digital services and has recently been contracted by TerramEarth to design and develop APIs that would enable TerramEarth to decrease unplanned downtime to less than one week. Given the short period for the project, TerramEarth wants you to focus on delivering APIs that meet their business requirements rather than spend time developing a custom framework that fits the needs of all APIs and their edge case scenarios. What should you do?`,
        'answers': [
            {'id':0, 'desc':`Expose APIs on Google App Engine through Google Cloud Endpoints for dealers and partners.`},
            {'id':1, 'desc':`Expose APIs on Google App Engine to the public.`},
            {'id':2, 'desc':`Expose Open API Specification compliant APIs on Google App Engine to the public.`},
            {'id':3, 'desc':`Expose APIs on Google Kubernetes Engine to the public.`},
            {'id':4, 'desc':`Expose Open API Specification compliant APIs on Google Kubernetes Engine to dealers and partners.`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2508,
        'question':`For this question, refer to the TerramEarth case study.
        You work for a consulting firm that specializes in providing next-generation digital services and has recently been contracted by TerramEarth to help them enhance their APIs. One of their APIs used for retrieving vehicle is being used successfully by analysts to predict unplanned downtime and preemptively stock replacement parts. TerramEarth has asked you to enable delegated authorization for 3rd parties so that the dealer network can use this data to better position new products and services. What should you do?
        
        `,
        'answers': [
            {'id':0, 'desc':`Use OAuth 2.0 to delegate authorization.`},
            {'id':1, 'desc':`Use SAML 2.0 to delegate authorization.`},
            {'id':2, 'desc':`Open up the API to IP ranges of the dealer network.`},
            {'id':3, 'desc':`Enable each dealer to share their credentials with their trusted partner.`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2509,
        'question':`For this question, refer to the TerramEarth case study.
        TerramEarth would like to reduce unplanned downtime for all its vehicles and preemptively stock replacement parts. To do this, TerramEarth has partnered with another firm to loT enable all vehicles in the field but is concerned that its existing data ingestion solution is not capable of handling the massive increase in ingested data. TerramEarth has asked you to design the data ingestion layer to support this requirement. What should you do?`,
        'answers': [
            {'id':0, 'desc':`Ingest data to Google Cloud Storage directly.`},
            {'id':1, 'desc':`Ingest data through Google Cloud Pub/Sub.`},
            {'id':2, 'desc':`Ingest data to Google BigQuery through streaming inserts.`},
            {'id':3, 'desc':`Continue ingesting data via existing FTP solution.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2510,
        'question':`TerramEarth would like to reduce unplanned downtime for all its vehicles and preemptively stock replacement parts. To do this, TerramEarth has partnered with another firm to loT enable all vehicles in the field. TerramEarth is concerned that its existing data ingestion solution may not satisfy all use cases. Early analysis has shown the FTP uploads are highly unreliable in areas with poor network connectivity and this frequently causes the FTP upload to restart from the beginning. On occasions, this has resulted in analysts querying old data and failing to predict unplanned downtimes accurately. How should you design the data ingestion layer to make it more reliable while ensuring data is made available to analysts as quickly as possible?`,
        'answers': [
            {'id':0, 'desc':`Replace the existing FTP server with a cluster of FTP servers on a single GKE cluster. 2. After receiving the files, push them to Multi-Regional Cloud Storage bucket. 3. Modify the ETL process to pick up files from this bucket.`},
            {'id':1, 'desc':`1. Replace the existing FTP server with multiple FTP servers running in GKE clusters in multiple regions. 2. After receiving the files, push them a Multi-Regional Cloud Storage bucket in the same region. 3. Modify the ETL process to pick up files from this bucket.`},
            {'id':2, 'desc':`1. Use Google HTTP(s) APIs to upload files to multiple Multi-Regional Cloud Storage Buckets. 2. Modify the ETL process to pick up files from these buckets.`},
            {'id':3, 'desc':`1. Use Google HTTP(s) APIs to upload files to multiple Regional Cloud Storage Buckets. 2. Modify the ETL process to pick up files from these buckets.`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2511,
        'question':`For this question, refer to the TerramEarth case study.
        TerramEarth would like to reduce unplanned downtime for all its vehicles and preemptively stock replacement parts. To do this, TerramEarth has partnered with another firm to loT enable all vehicles in the field. The telemetry data from vehicles is stored in the respective region buckets in the US, Asia and Europe. The feedback from most service centres and dealer networks indicates vehicle hydraulics fail after 69000 miles, and this has knock-on effects such as disabling the dynamic adjustment in the height of the vehicle. The vehicle design team has approached you to provide them with all raw telemetry data to analyze and determine the cause of this failure. You need to run this job on all the data. How should you do this while minimizing costs?
        
        `,
        'answers': [
            {'id':0, 'desc':`Transfer telemetry data from all Regional Cloud Storage buckets to another bucket in a single zone. Launch a Dataproc job in the same zone.`},
            {'id':1, 'desc':`Transfer telemetry data from all Regional Cloud Storage buckets to another bucket in a single region. Launch a Dataproc job in the same region.`},
            {'id':2, 'desc':`Run a Dataproc job in each region to extract, pre-process and tar (compress) the data. Transfer this data to a Multi-Regional Cloud Storage bucket. Launch a Dataprocjob.`},
            {'id':3, 'desc':`Run a Dataproc job in each region to extract, pre-process and tar (compress) the data. Transfer this data to a Regional Cloud Storage bucket. Launch a Dataproc job.`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2512,
        'question':`For this question, refer to the Mountkirk Games case study.
        Your company is an industry-leading ISTQB certified software testing firm, and Mountkirk Games has recently partnered with your company for designing their new testing strategy. Mountkirk Games has recently migrated their backend to GCP and uses continuous deployment to automate releases. Few of their releases have recently caused a loss of functionality within the application, a few other releases have had unintended performance issues. You have been asked to come up with a testing strategy that lets you properly test all new releases while also giving you the ability to test particular new release to scaled-up production-like traffic to detect performance issues. Mountkirk games want their test environments to scale cost-effectively. How should you design the test environments?`,
        'answers': [
            {'id':0, 'desc':`Design the test environments to scale based on simulated production traffic.`},
            {'id':1, 'desc':`Make use of the existing on-premises infrastructure to scale based on simulated production traffic.`},
            {'id':2, 'desc':`Stress tests every single GCP service used by the application individually.`},
            {'id':3, 'desc':`Create multiple static test environments to handle different levels of traffic, e.g. small, medium, big.`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2513,
        'question':`TerramEarth would like to reduce unplanned downtime for all its vehicles and preemptively stock replacement parts. To do this, TerramEarth has partnered with another firm to loT enable all vehicles in the field. The CTO sees an Al-driven solution being the future of this prediction and wants to store all telemetry data in a cost-efficient way while the team works on building a blueprint for a machine learning model in a year. The CTO has asked you to facilitate cost-efficient storage of the telemetry data. Where should you store this data?`,
        'answers': [
            {'id':0, 'desc':`Compress the telemetry data in half-hourly snapshots on the vehicle loT device and push to a Nearline Google Cloud Storage bucket.`},
            {'id':1, 'desc':`Use a real-time (streaming) dataflow job to compress the incoming data and store in BigQuery.`},
            {'id':2, 'desc':`Use a real-time (streaming) dataflow job to compress the incoming data and store in Cloud Bigtable.`},
            {'id':3, 'desc':`Compress the telemetry data in half-hourly snapshots on the vehicle loT device and push to a Coldline Google Cloud Storage bucket.`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2514,
        'question':`For this question, refer to the TerramEarth case study.
        The feedback from all TerramEarth service centres and dealer networks indicates vehicle hydraulics fail after 69000 miles, and this has knock-on effects such as disabling the dynamic adjustment in the height of the vehicle. The vehicle design team wants the raw data to be analyzed, and operational parameters tweaked in response to various factors to prevent such failures. How can you facilitate this feedback loop to all the connected and unconnected vehicles while minimizing costs?`,
        'answers': [
            {'id':0, 'desc':`Engineers from vehicle design team analyze the raw telemetry data and determine patterns that can be used by algorithms to identify operational adjustments and tweak the drive train parameters automatically.`},
            {'id':1, 'desc':`Use a custom machine learning solution in on-premises to identify operational adjustments and tweak the drive train parameters automatically.`},
            {'id':2, 'desc':`Run a real-time (streaming) Dataflow job to identify operational adjustments and use Firebase Cloud Messaging to push the optimisations automatically.`},
            {'id':3, 'desc':`Use Machine learning in Google Al Platform to identify operational adjustments and tweak the drive train parameters automatically.`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2515,
        'question':`Your organization has a 3-tier web application deployed in the same Google Cloud Virtual Private Cloud (VPC). Each tier (web, API, and database) scales independently of the others. Network traffic should flow through the web to the API tier, and then on to the database tier. Traffic should not flow between the web and the database tier. How should you configure the network with minimal steps?`,
        'answers': [
            {'id':0, 'desc':`Add each tier to a different subnetwork.`},
            {'id':1, 'desc':`Set up software-based firewalls on individual VMs.`},
            {'id':2, 'desc':`Add tags to each tier and set up routes to allow the desired traffic flow.`},
            {'id':3, 'desc':`Add tags to each tier and set up firewall rules to allow the desired traffic flow.`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
];

export const setE = [

    {
        'id':2516,
        'question':`You set up an autoscaling managed instance group to serve web traffic for an upcoming launch. After configuring the instance group as a backend service to an HTTP(S) load balancer, you notice that virtual machine (VM) instances are being terminated and re-launched every minute. The instances do not have a public IP address. You have verified that the appropriate web response is coming from each instance using the curl command. You want to ensure that the backend is configured correctly. What should you do?`,
        'answers': [
            {'id':0, 'desc':`Ensure that a firewall rule exists to allow source traffic on HTTP/HTTPS to reach the load balancer`},
            {'id':1, 'desc':`Assign a public IP to each instance, and configure a firewall rule to allow the load balancer to reach the instance public IP.`},
            {'id':2, 'desc':`Ensure that a firewall rule exists to allow load balancer health checks to reach the instances in the instance group.`},
            {'id':3, 'desc':`Create a tag on each instance with the name of the load balancer. Configure a firewall rule with the name of the load balancer as the source and the instance tag as the destination.`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2517,
        'question':`Your company wants to try out the cloud with low risk. They want to archive approximately 100 TB of their log data to the cloud and test the serverless analytics features available to them there, while also retaining that data as a long-term disaster recovery backup. Which two steps should they take? (choose two)`,
        'answers': [
            {'id':0, 'desc':`Load logs into BigQuery.`},
            {'id':1, 'desc':`Load logs into Cloud SQL.`},
            {'id':2, 'desc':`Import logs into Cloud Logging.`},
            {'id':3, 'desc':`Insert logs into Cloud Bigtable.`},
            {'id':4, 'desc':`Upload log files into Cloud Storage.`},
        ],
        'answerId': [0,4],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2518,
        'question':`
        You analyzed TerramEarth’s business requirement to reduce downtime and found that they can achieve a majority of time saving by reducing customers’ wait time for parts. You decided to focus on reduction of the 3 weeks’ aggregate reporting time. Which modifications to the company’s processes should you recommend?`,
        'answers': [
            {'id':0, 'desc':`Migrate from CSV to binary format, migrate from FTP to SFTP transport, and develop machine learning analysis of metrics.`},
            {'id':1, 'desc':`Migrate from FTP to streaming transport, migrate from CSV to binary format, and develop machine learning analysis of metrics.`},
            {'id':2, 'desc':`Increase fleet cellular connectivity to 80%, migrate from FTP to streaming transport, and develop machine learning analysis of metrics.`},
            {'id':3, 'desc':`Migrate from FTP to SFTP transport, develop machine learning analysis of metrics, and increase dealer local inventory by a fixed factor.`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2519,
        'question':`Which of TerramEarth’s legacy enterprise processes will experience significant change as a result of increased Google Cloud Platform adoption?`,
        'answers': [
            {'id':0, 'desc':`OpEx/CapEx allocation, LAN change management, capacity planning`},
            {'id':1, 'desc':`Capacity planning, TCO calculations, OpEx/CapEx allocation`},
            {'id':2, 'desc':`Capacity planning, utilization measurement, data center expansion`},
            {'id':3, 'desc':`Data center expansion,TCO calculations, utilization measurement`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2520,
        'question':`Your agricultural division is experimenting with fully autonomous vehicles. You want your architecture to promote strong security during vehicle operation. Which two architecture characteristics should you consider? (choose two)`,
        'answers': [
            {'id':0, 'desc':`Use multiple connectivity subsystems for redundancy.`},
            {'id':1, 'desc':`Require IPv6 for connectivity to ensure a secure address space.`},
            {'id':2, 'desc':`Enclose the vehicle’s drive electronics in a Faraday cage to isolate chips.`},
            {'id':3, 'desc':`Use a functional programming language to isolate code execution cycles.`},
            {'id':4, 'desc':`Treat every microservice call between modules on the vehicle as untrusted.`},
            {'id':5, 'desc':`Use a Trusted Platform Module (TPM) and verify firmware and binaries on boot.`},
        ],
        'answerId': [4,5],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2521,
        'question':`Today, TerramEarth maintenance workers receive interactive performance graphs for the last 24 hours (86,400 events) by plugging their maintenance tablets into the vehicle. The support group wants support technicians to view this data remotely to help troubleshoot problems. You want to minimize the latency of graph loads. How should you provide this functionality?`,
        'answers': [
            {'id':0, 'desc':`Execute queries against data stored in a Cloud SQL.`},
            {'id':1, 'desc':`Execute queries against data indexed by vehicle_id.timestamp in Cloud Bigtable.`},
            {'id':2, 'desc':`Execute queries against data stored on daily partitioned BigQuery tables`},
            {'id':3, 'desc':`Execute queries against BigQuery with data stored in Cloud Storage via BigQuery federation.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2522,
        'question':`Because you do not know every possible future use for the data TerramEarth collects, you have decided to build a system that captures and stores all raw data in case you need it later. How can you most cost- effectively accomplish this goal?`,
        'answers': [
            {'id':0, 'desc':`Have the vehicles in the field stream the data directly into BigQuery.`},
            {'id':1, 'desc':`Have the vehicles in the field pass the data to Cloud Pub/Sub and dump it into a Cloud Dataproc cluster that stores data in Apache Hadoop Distributed File System (HDFS) on persistent disks.`},
            {'id':2, 'desc':`Have the vehicles in the field continue to dump data via FTP, adjust the existing Linux machines, and use a collector to upload them into Cloud Dataproc HDFS for storage`},
            {'id':3, 'desc':`Have the vehicles in the field continue to dump data via FTP, and adjust the existing Linux machines to immediately upload it to Cloud Storage with gsutil.`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2523,
        'question':`Your company wants to deploy several microservices to help their system handle elastic loads. Each microservice uses a different version of software libraries. You want to enable their developers to keep their development environment in sync with the various production services. Which technology should you choose?`,
        'answers': [
            {'id':0, 'desc':`RPM/DEB`},
            {'id':1, 'desc':`Containers`},
            {'id':2, 'desc':`Chef/Puppet`},
            {'id':3, 'desc':`Virtual machines`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2524,
        'question':`Your company wants to track whether someone is present in a meeting room reserved for a scheduled meeting. There are 1000 meeting rooms across 5 offices on 3 continents. Each room is equipped with a motion sensor that reports its status every second. You want to support the data ingestion needs of this sensor network. The receiving infrastructure needs to account for the possibility that the devices may have inconsistent connectivity. Which solution should you design?`,
        'answers': [
            {'id':0, 'desc':`Have each device create a persistent connection to a Compute Engine instance and write messages to a custom application.`},
            {'id':1, 'desc':`Have devices poll for connectivity to Cloud SQL and insert the latest messages on a regular interval to a device specific table.`},
            {'id':2, 'desc':`Have devices poll for connectivity to Cloud Pub/Sub and publish the latest messages on a regular interval to a shared topic for all devices.`},
            {'id':3, 'desc':`Have devices create a persistent connection to an App Engine application fronted by Cloud Endpoints, which ingest messages and write them to Cloud Datastore.`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2525,
        'question':`To reduce costs, the Director of Engineering has required all developers to move their development infrastructure resources from on-premises virtual machines (VMs) to Google Cloud. These resources go through multiple start/stop events during the day and require state to persist. You have been asked to design the process of running a development environment in Google Cloud while providing cost visibility to the finance department. Which two steps should you take? (choose two)`,
        'answers': [
            {'id':0, 'desc':`Use persistent disks to store the state. Start and stop the VM as needed.`},
            {'id':1, 'desc':`Use the --auto-delete flag on all persistent disks before stopping the VM.`},
            {'id':2, 'desc':`Apply VM CPU utilization label and include it in the BigQuery billing export.`},
            {'id':3, 'desc':`Use BigQuery billing export and labels to relate cost to groups.`},
            {'id':4, 'desc':`Store all state in a Local SSD, snapshot the persistent disks, and terminate the VM`},
        ],
        'answerId': [0,3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2526,
        'question':` You are designing a large distributed application with 30 microservices. Each of your distributed microservices needs to connect to a database backend. You want to store the credentials securely. Where should you store the credentials?`,
        'answers': [
            {'id':0, 'desc':`In the source code`},
            {'id':1, 'desc':`In an environment variable`},
            {'id':2, 'desc':`In a secret management system`},
            {'id':3, 'desc':`In a config file that has restricted access through ACLs`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':`A secret management system such as Secret Manager is a secure and convenient storage system for API keys, passwords, certificates, and other sensitive data. Secret Manager provides a central place and single source of truth to manage, access, and audit secrets across Google Cloud.`},]
    },
    {
        'id':2527,
        'question':`Mountkirk Games wants to set up a real-time analytics platform for their new game. The new platform must meet their technical requirements. Which combination of Google technologies will meet all of their requirements?`,
        'answers': [
            {'id':0, 'desc':`Kubernetes Engine, Cloud Pub/Sub, and Cloud SQL`},
            {'id':1, 'desc':`Cloud Dataflow, Cloud Storage, Cloud Pub/Sub, and BigQuery`},
            {'id':2, 'desc':`Cloud SQL, Cloud Storage, Cloud Pub/Sub, and Cloud Dataflow`},
            {'id':3, 'desc':`Cloud Dataproc, Cloud Pub/Sub, Cloud SQL, and Cloud Dataflow`},
            {'id':4, 'desc':`Cloud Pub/Sub, Compute Engine, Cloud Storage, and Cloud Dataproc`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':2417,
        'question':`Company wants to move existing application data ingest based on Microsoft SQL server to Google Cloud SQL Server, What configuration will you recommend to have server on Failover Clustering ?`,
        'answers': [
            {'id':0, 'desc':'Use Kubernetes to deploy SQL Server to take care high availability '},
            {'id':1, 'desc':'Use Google Cloud SQL Server instance - its always configured for high availability by default. '},
            {'id':2, 'desc':'Use Instance Groups and Template and use Microsoft SQL Server image to launch instances.  '},
            {'id':3, 'desc':'Configure AlwaysOn Availability Groups for all instance in cluster'},
        ],
        'answerId': [3],
        'rationale': []
    },
    {
        'id':2418,
        'question':`Company wants to simulate analytics processing for games being played over slow (or intermittent) (phone) internet connection while in remote area. How they can achieve it in test environment?`,
        'answers': [
            {'id':0, 'desc':'Migrate gaming analytics to Cloud Dataproc. '},
            {'id':1, 'desc':'Deploy gaming backed in Cloud Function. '},
            {'id':2, 'desc':'Create random delay in collecting and processing data by analytics platform. '},
            {'id':3, 'desc':'Deploy game in Computer Mobile applications simulator( Changes in gaming backend not required )'},
        ],
        'answerId': [2],
        'rationale': [{'id':2, 'desc':`Creating random delay in analytics platform will help MountKirk to test slow data coming from games. The existing game testing application can be used to do this without making any changes to game.`}]
    },
    {
        'id':2419,
        'question':`Terramearth decided to use BigQuery as Data warehouse solution. The data is expected to be very big (more than 20 TB per week) and they are looking at best possible ways to store and manage data. What is best possible configuration in BigQuery for this use case ?`,
        'answers': [
            {'id':0, 'desc':'Use federated data sets'},
            {'id':1, 'desc':'Use Cloud Storage to store data and load it whenever required'},
            {'id':2, 'desc':'Spread the data in multiple regions'},
            {'id':3, 'desc':'Use time based partition for dataset\'s tables'},
        ],
        'answerId': [3],
        'rationale': []
    },
];

export const setF = [
    {
        'id':2015,
        'question':`How can you minimize the cost of storing security video files that are processed repeatedly for 30 days?`,
        'answers': [
            {'id':0, 'desc':'Standard Storage, then move to Coldline Storage or Archive Storage after 30 days.'},
            {'id':1, 'desc':'Nearline Storage, then move to Coldline Storage after 30 days.'},
            {'id':2, 'desc':'Standard Storage, then move to Nearline Storage after 30 days.'},
            {'id':3, 'desc':'Keep the files in Standard Storage.'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':'Standard Storage for lowest access costs over the 30 days, then Coldline Storage or Archive Storage because it is unlikely to be read after the 30 days.'},
            {'id':1, 'desc':`Using Nearline Storage over the 30 days won't be cost effective because the data is accessed too frequently. There is also a 30 day minimum storage duration.`},
            {'id':2, 'desc':`Moving from Standard Storage to Nearline Storage after the 30 days isn’t as cost effective as Coldline Storage or Archive Storage if the data is not going to be accessed that frequently.`},
            {'id':3, 'desc':`Keeping the data in Standard Storage is the least cost effective option if it is not going to be accessed frequently after 30 days.`},
        ]
    },
    {
        'id':2016,
        'question':`Because you do not know every possible future use for the data TerramEarth collects, you have decided to build a system that captures and stores all raw data in case you need it later. How can you most cost-effectively accomplish this goal?`,
        'answers': [
            {'id':0, 'desc':'Have the vehicles in the field stream the data directly into BigQuery'},
            {'id':1, 'desc':'Have the vehicles in the field pass the data to Cloud Pub/Sub and dump it into a Cloud Dataproc cluster that stores data in Apache Hadoop Distributed File System (HDFS) on persistent disks'},
            {'id':2, 'desc':'Have the vehicles in the field continue to dump data via FTP, adjust the existing Linux machines and use a collector to upload them into Cloud Dataproc HDFS for storage'},
            {'id':3, 'desc':'Have the vehicles in the field continue to dump data via FTP and adjust the existing Linux machines to immediately upload it to Cloud Storage with gsutil'},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':`BigQuery requires structured data`},
            {'id':1, 'desc':`Possible, but there's no need to use dataproc - we don't know what the data is or how to process it`},
            {'id':2, 'desc':`The data dump will work, but there's no need to use dataproc - we don't know what the data is or how to process it`},
            {'id':3, 'desc':`This uploads it to Cloud Storage for later processing`},
        ]
    },
    {
        'id':2017,
        'question':`Where should you upload unstructured Data?`,
        'answers': [
            {'id':0, 'desc':'Cloud Storage/Cloud Firestore'},
            {'id':1, 'desc':'Cloud Bigtable'},
            {'id':2, 'desc':'BigQuery'},
            {'id':3, 'desc':'Spanner'},
            {'id':4, 'desc':'Cloud SQL'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':`Unstructured/Files`},
            {'id':1, 'desc':`Requires Semi-Structured NoSQL`},
            {'id':2, 'desc':`Requires Structured SQL`},
            {'id':3, 'desc':`Requires Structured SQL`},
            {'id':4, 'desc':`Requires Structured SQL`}
        ]
    },
    {
        'id':2018,
        'question':`After creating a Deployment named "hello-server", you need to expose it to the internet so that users can access it. You can expose your application by creating a Service, a Kubernetes resource that exposes your application to external traffic.
        To expose your application, run the following`,
        'answers': [
            {'id':0, 'desc':'kubectl expose deployment hello-server --type LoadBalancer --port 80 --target-port 8080'},
            {'id':1, 'desc':'kubectl run deployment hello-server --type LoadBalancer --port 80 --target-port 8080'},
            {'id':2, 'desc':'gcloud expose deployment hello-server --type LoadBalancer --port 80 --target-port 8080'},
            {'id':3, 'desc':'gsutil run deployment hello-server --type LoadBalancer --port 80 --target-port 8080'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':`kubectl expose will load balance traffic across the running instances, and can create a HA proxy for accessing the containers from outside the cluster.
            Passing in the --type LoadBalancer flag creates a Compute Engine load balancer for your container. The --port flag initializes public port 80 to the internet and the --target-port flag routes the traffic to port 8080 of the application.`},
            {'id':1, 'desc': `kubectl run will start running 1 or more instances of a container image on your cluster.`},
            {'id':2, 'desc':'gcloud can create a GKE cluster, but this command will not expose it'},
            {'id':3, 'desc':'gsutil is not an applicable command here'},
        ]
    },
    {
        'id':2019,
        'question':`What is the best practice for Indexes?`,
        'answers': [
            {'id':0, 'desc':'If a property will never be needed for a query, exclude the property from indexes.'},
            {'id':1, 'desc':'Avoid having too many composite indexes.'},
            {'id':2, 'desc':'Do not index properties with monotonically increasing values (such as a NOW() timestamp)'},
            {'id':3, 'desc':'All of the above'},
        ],
        'answerId': [3],
        'rationale': [
            {'id':3, 'desc':``}
        ]
    },
    {
        'id':2021,
        'question':`During a high traffic portion of the day, one of your relational databases crashes, but the replica is never promoted to a master. You want to avoid this in the future.
        What should you do?`,
        'answers': [
            {'id':0, 'desc':'Use a different database'},
            {'id':1, 'desc':'Choose larger instances for your database'},
            {'id':2, 'desc':'Create snapshots of your database more regularly'},
            {'id':3, 'desc':'Implement routinely scheduled failovers of your databases'},
        ],
        'answerId': [1],
        'rationale': [
            {'id':1, 'desc':`Cloud SQL instance resources (CPU and RAM) are near 100% usage, causing the high availability instance to go down. The instance machine size is too small for the load.            
            Things to try: Edit the instance to upgrade to a larger machine size to get more CPUs and memory.`}
        ]
    },
    {
        'id':2022,
        'question':`One of the developers on your team deployed their application in Google Container Engine with the Dockerfile below. They report that their application deployments are taking too long. You want to optimize this Dockerfile for faster deployment times without adversely affecting the app's functionality.
        Which two actions should you take?`,
        'img':code72e15b4b,
        'answers': [
            {'id':0, 'desc':'Remove Python after running pip'},
            {'id':1, 'desc':'Remove dependencies from requirements.txt'},
            {'id':2, 'desc':'Use a slimmed-down base image like Alpine Linux'},
            {'id':3, 'desc':'Use larger machine types for your Google Container Engine node pools'},
            {'id':4, 'desc':'Copy the source after the package dependencies (Python and pip) are installed'},
        ],
        'answerId': [2,4],
        'rationale': [
            {'id':2, 'desc':`The speed of deployment can be changed by limiting the size of the uploaded app, limiting the complexity of the build necessary in the Dockerfile, if present, and by ensuring a fast and reliable internet connection.
            Note: Alpine Linux is built around musl libc and busybox. This makes it smaller and more resource efficient than traditional GNU/Linux distributions. A container requires no more than 8 MB and a minimal installation to disk requires around 130 MB of storage. Not only do you get a fully-fledged Linux environment but a large selection of packages from the repository.`}
        ]
    },
    {
        'id':2023,
        'question':`Your company's user-feedback portal comprises a standard LAMP stack replicated across two zones. It is deployed in the us-central1 region and uses autoscaled managed instance groups on all layers, except the database. Currently, only a small group of select customers have access to the portal. The portal meets a
        99,99% availability SLA under these conditions. However next quarter, your company will be making the portal available to all users, including unauthenticated users. You need to develop a resiliency testing strategy to ensure the system maintains the SLA once they introduce additional user load.
        What should you do?`,
        'answers': [
            {'id':0, 'desc':'Capture existing users input, and replay captured user load until autoscale is triggered on all layers. At the same time, terminate all resources in one of the zones'},
            {'id':1, 'desc':'Create synthetic random user input, replay synthetic load until autoscale logic is triggered on at least one layer, and introduce "chaos" to the system by terminating random resources on both zones'},
            {'id':2, 'desc':'Expose the new system to a larger group of users, and increase group size each day until autoscale logic is triggered on all layers. At the same time, terminate random resources on both zones'},
            {'id':3, 'desc':'Capture existing users input, and replay captured user load until resource utilization crosses 80%. Also, derive estimated number of users based on existing user\'s usage of the app, and deploy enough resources to handle 200% of expected load'},
        ],
        'answerId': [1],
        'rationale': [
            {'id':1, 'desc':`Create synthetic random user input, replay synthetic load until autoscale logic is triggered on at least one layer, and introduce chaos to the system by terminating random resources on both zones
            >> This option takes care of the requirement of testing. Is a pattern used by org like Netflix chaos monkey).`}
        ]
    },
    {
        'id':2024,
        'question':`What type of storage is limited to a capacity of 10,230 GB?`,
        'answers': [
            {'id':0, 'desc':'Cloud Datastore'},
            {'id':1, 'desc':'Bigtable'},
            {'id':2, 'desc':'Cloud Storage'},
            {'id':3, 'desc':'Cloud SQL'},
            {'id':4, 'desc':'Cloud Spanner'},
            {'id':5, 'desc':'Cloud BigQuery'},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':'Terabytes+ Limit with 1MB/entity Unit size'},
            {'id':1, 'desc':'Petabytes+ Limit with ~10MB/cell ~100 MB/row Unit size'},
            {'id':2, 'desc':'Petabytes+ Limit with 5TB/object Unit size'},
            {'id':3, 'desc':'10,230 Limit with Unit size determined by DB engine'},
            {'id':4, 'desc':'Petabytes Limit with 10,240 MiB/row Unit size'},
            {'id':5, 'desc':'Petabytes+ Limit with 10 MB/row Unit size'},
        ]
    },
    {
        'id':2025,
        'question':`_____ is a fast, easy-to-use, low-cost and fully managed service that lets you run the Apache Spark and Apache Hadoop ecosystem on Google
        Cloud Platform. _______ provisions big or small clusters rapidly, supports many popular job types, and is integrated with other Google Cloud Platform services, such as Google Cloud Storage and Stackdriver Logging, thus helping you reduce TCO`,
        'answers': [
            {'id':0, 'desc':'Google Cloud Dataflow'},
            {'id':1, 'desc':'Google Cloud Dataproc'},
            {'id':2, 'desc':'Google Compute Engine'},
            {'id':3, 'desc':'Google Kubernetes Engine'},
        ],
        'answerId': [1,3],
        'rationale': [
            {'id':1, 'desc':``}
        ]
    },
    {
        'id':2026,
        'question':`What are some of Google Cloud Platform's pricing innovations? Select all that Qualify`,
        'answers': [
            {'id':0, 'desc':'Robust Infrasturcture'},
            {'id':1, 'desc':'Sustained-use discounts'},
            {'id':2, 'desc':'Compute Engine custom machine types'},
            {'id':3, 'desc':'Open-source technologies'},
            {'id':4, 'desc':'Sub-hour billing'},
        ],
        'answerId': [1,2,4],
        'rationale': [
            {'id':1, 'desc':`Sub-hour billing, Sustained-use discounts and Compute Engine custom machine types are pricing innovations`}
        ]
    },
    {
        'id':2027,
        'question':`Google's Data Centers were the first to achieve ISO 14001 certification`,
        'answers': [
            {'id':0, 'desc':'true'},
            {'id':4, 'desc':'false'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':`Google works to make data centers runas efficiently as possible. Google's data centers were the first to achieve iso 14001 certification. Running data workloads on GCP can help companies achieve their environmental goals.`}
        ]
    },
    {
        'id':2028,
        'question':`Why might a GCP customer use resources in several regions around the world?`,
        'answers': [
            {'id':0, 'desc':'To bring their applications closer to users around the world, and for improved fault tolerance'},
            {'id':4, 'desc':'To improve security'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``}
        ]
    },
    {
        'id':2029,
        'question':`Why might a GCP customer use resources in several zones within a region?`,
        'answers': [
            {'id':0, 'desc':'For improved fault tolerance'},
            {'id':4, 'desc':'For better performance'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':`As part of building a fault-tolerant application, you can spread your resources across multiple zones in a region.`}
        ]
    },
    {
        'id':2416,
        'question':`TerramEarth wants to migrate to existing python based data ingestion implementation to Google Cloud Platform, What is right fit solution for transformation ?`,
        'answers': [
            {'id':0, 'desc':'Cloud Dataflow'},
            {'id':1, 'desc':'Cloud Dataproc'},
            {'id':2, 'desc':'Cloud BigQuery'},
        ],
        'answerId': [0],
        'rationale': []
    },
];

export const setG = [

    {
        'id':2420,
        'question':`Marketing company have digital assets (Videos, Images, flyer, audios etc) hosted in Cloud Storage. These assets are used rarely by different business units, You are tasked to design solution to systematically distribute the cost to different accounts/projects based on their usage. Company is ready to pay minimum cost to store the data in cloud storage. What will be your solution to distribute cost?`,
        'answers': [
            {'id':0, 'desc':'Storage data in individual buckets in respective project, configure lifecycle polity to move data between different projects based on need.'},
            {'id':1, 'desc':'Store data in Cloud Storage with Coldline storage bucket, This will reduce storage cost for huge data.'},
            {'id':2, 'desc':'Create buckets in different projects and copy the content in all buckets and depends on data access choose Nearline or Coldline as storage class to save cost'},
            {'id':3, 'desc':'Store data in common bucket and provide access to all accounts/projects, Set Storage class to Nearline or Coldline based on access pattern, Configure Requester pays (access fees) for all bucket.'},
        ],
        'answerId': [3],
        'rationale': [
            {'id':3, 'desc':'Requester pays enables fees(access fees) to be paid by requester and not by owner.'}
        ]
    },
    {
        'id':2421,
        'question':`The development team has provided you with a Kubernetes Deployment file. You have no infrastructure yet and need to deploy the application. What should you do?`,
        'answers': [
            {'id':0, 'desc':'Use gcloud to create a Kubernetes cluster. Use Deployment Manager to create the deployment.'},
            {'id':1, 'desc':'Use gcloud to create a Kubernetes cluster. Use kubectl to create the deployment.'},
            {'id':2, 'desc':'Use kubectl to create a Kubernetes cluster. Use kubectl to create the deployment.'},
            {'id':3, 'desc':'Use kubectl to create a Kubernetes cluster. Use Deployment Manager to create the deployment.'},
        ],
        'answerId': [1],
        'rationale': [
            {'id':1, 'desc':''}
        ]
    },
    {
        'id':2422,
        'question':`What is the effective policy for a resource at a node?`,
        'answers': [
            {'id':0, 'desc':'The effective policy is the union of the policy set at the node and policies inherited from its ancestors'},
            {'id':1, 'desc':'The effective policy is determined only by the policy set at the node'},
            {'id':2, 'desc':'The effective policy is the policy set at the node and restricted by the policies of its ancestors'},
            {'id':3, 'desc':'The effective policy is the intersection of the policy set at the node and policies inherited from its ancestors'},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':`The effective policy for a resource is the union of the policy set on the resource and the policy inherited from its ancestors. This inheritance is transitive. In other words, resources inherit policies from the project, which inherit policies from the organization`}
        ]
    },
];