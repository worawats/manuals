(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=l.a.createContext({}),i=function(e){var t=l.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return l.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?l.a.createElement(d,s(s({ref:t},b),{},{components:n})):l.a.createElement(d,s({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var b=2;b<r;b++)c[b]=n[b];return l.a.createElement.apply(null,c)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return i}));var a=n(3),l=n(7),r=(n(0),n(104)),c={id:"nextcloud-kubenetes",title:"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07 Nextcloud \u0e1a\u0e19 Kubenetes",sidebar_label:"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07 Nextcloud \u0e1a\u0e19 Kubenetes"},s={unversionedId:"nextcloud-kubenetes",id:"nextcloud-kubenetes",isDocsHomePage:!1,title:"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07 Nextcloud \u0e1a\u0e19 Kubenetes",description:"\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07 Helm Package",source:"@site/docs/nextcloud-kubenetes.md",slug:"/nextcloud-kubenetes",permalink:"/manuals/docs/nextcloud-kubenetes",version:"current",sidebar_label:"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07 Nextcloud \u0e1a\u0e19 Kubenetes",sidebar:"someSidebar",previous:{title:"\u0e27\u0e34\u0e18\u0e35\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07 Kubenetes \u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49 Multi-Master Node",permalink:"/manuals/docs/kubernetes-multi-masters"}},o=[{value:"\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07 Helm Package",id:"\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07-helm-package",children:[]},{value:"\u0e40\u0e15\u0e23\u0e35\u0e22\u0e21 Persistent Volume \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Redis",id:"\u0e40\u0e15\u0e23\u0e35\u0e22\u0e21-persistent-volume-\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a-redis",children:[]},{value:"\u0e40\u0e15\u0e23\u0e35\u0e22\u0e21 Persistent Volume \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Nextcloud Data",id:"\u0e40\u0e15\u0e23\u0e35\u0e22\u0e21-persistent-volume-\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a-nextcloud-data",children:[]},{value:"\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07 Nextcloud \u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49 Helm Charts",id:"\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07-nextcloud-\u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49-helm-charts",children:[]},{value:"\u0e1b\u0e23\u0e31\u0e1a\u0e41\u0e15\u0e48\u0e07 Nextcloud \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e17\u0e33 Pod Autoscaling",id:"\u0e1b\u0e23\u0e31\u0e1a\u0e41\u0e15\u0e48\u0e07-nextcloud-\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e17\u0e33-pod-autoscaling",children:[]}],b={toc:o};function i(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07-helm-package"},"\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07 Helm Package"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07 Helm Package (",Object(r.b)("a",{parentName:"li",href:"https://phoenixnap.com/kb/install-helm"},"https://phoenixnap.com/kb/install-helm"),")")),Object(r.b)("h3",{id:"\u0e40\u0e15\u0e23\u0e35\u0e22\u0e21-persistent-volume-\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a-redis"},"\u0e40\u0e15\u0e23\u0e35\u0e22\u0e21 Persistent Volume \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Redis"),Object(r.b)("p",null,"Redis Data \u0e08\u0e30\u0e16\u0e39\u0e01\u0e40\u0e01\u0e47\u0e1a\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19 Persistent Volume \u0e0b\u0e36\u0e48\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e1a\u0e19 Local Storage"),Object(r.b)("p",null,"\u0e08\u0e30\u0e43\u0e0a\u0e49\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14 3 Persistent Volume \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23 Deploy 1 \u0e04\u0e23\u0e31\u0e49\u0e07 (1 Master, 2 Slaves)"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u0e43\u0e2b\u0e49\u0e23\u0e31\u0e19\u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07\u0e15\u0e48\u0e2d\u0e44\u0e1b\u0e19\u0e35\u0e49\u0e1a\u0e19\u0e17\u0e38\u0e01\u0e42\u0e2b\u0e19\u0e14\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19 Cluster (Master,Worker)")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"mkdir /data/vol1 && chmod 777 /data/vol1\nmkdir /data/vol2 && chmod 777 /data/vol2\nmkdir /data/vol3 && chmod 777 /data/vol3\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e44\u0e1f\u0e25\u0e4c pv.yaml")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'kind: PersistentVolume\napiVersion: v1\nmetadata:\n  name: local-storage-vol1\n  labels:\n    type: local\nspec:\n  storageClassName: ""\n  capacity:\n    storage: 10Gi\n  accessModes:\n    - ReadWriteOnce\n  hostPath:\n    path: "/data/vol1"\n---\nkind: PersistentVolume\napiVersion: v1\nmetadata:\n  name: local-storage-vol2\n  labels:\n    type: local\nspec:\n  storageClassName: ""\n  capacity:\n    storage: 10Gi\n  accessModes:\n    - ReadWriteOnce\n  hostPath:\n    path: "/data/vol2"\n---\nkind: PersistentVolume\napiVersion: v1\nmetadata:\n  name: local-storage-vol3\n  labels:\n    type: local\nspec:\n  storageClassName: ""\n  capacity:\n    storage: 10Gi\n  accessModes:\n    - ReadWriteOnce\n  hostPath:\n    path: "/data/vol3"\n')),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Apply Configuration")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f pv.yaml\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e2a\u0e31\u0e07\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e2a\u0e14\u0e07 Persistent Volume \u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e36\u0e49\u0e19")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"kubectl get pv\n")),Object(r.b)("p",null,"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07 Output"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"NAME                 CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS\nlocal-storage-vol1   10Gi       RWO            Retain           Available\nlocal-storage-vol2   10Gi       RWO            Retain           Available\nlocal-storage-vol3   10Gi       RWO            Retain           Available\n")),Object(r.b)("h3",{id:"\u0e40\u0e15\u0e23\u0e35\u0e22\u0e21-persistent-volume-\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a-nextcloud-data"},"\u0e40\u0e15\u0e23\u0e35\u0e22\u0e21 Persistent Volume \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Nextcloud Data"),Object(r.b)("p",null,"Nextcloud Data \u0e08\u0e30\u0e16\u0e39\u0e01\u0e40\u0e01\u0e47\u0e1a\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19 Persistent Volume \u0e0b\u0e36\u0e48\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e1a\u0e19 NFS Server"),Object(r.b)("h4",{id:"\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35"},"\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"NFS Server"),Object(r.b)("li",{parentName:"ul"},"Export Directory \u0e0b\u0e36\u0e48\u0e07\u0e04\u0e2d\u0e19\u0e1f\u0e34\u0e04\u0e40\u0e2d\u0e32\u0e44\u0e27\u0e49\u0e41\u0e25\u0e49\u0e27")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07 Kubernetes NFS Subdir External Provisioner")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"helm repo add nfs-subdir-external-provisioner https://kubernetes-sigs.github.io/nfs-subdir-external-provisioner/\nhelm install nfs-subdir-external-provisioner nfs-subdir-external-provisioner/nfs-subdir-external-provisioner \\\n    --set nfs.server=x.x.x.x \\\n    --set nfs.path=/exported/path\n")),Object(r.b)("h3",{id:"\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07-nextcloud-\u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49-helm-charts"},"\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07 Nextcloud \u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49 Helm Charts"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"\u0e2a\u0e23\u0e49\u0e32\u0e07 Namespace ",Object(r.b)("mark",null,'"nextcloud"'))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace nextcloud\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e15\u0e23\u0e27\u0e08\u0e2a\u0e2d\u0e1a Namespace \u0e17\u0e35\u0e48\u0e16\u0e39\u0e01\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e36\u0e49\u0e19")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"kubectl get namespace\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"NAME              STATUS   AGE\ncalico-system     Active   11d\ndefault           Active   11d\nkube-node-lease   Active   11d\nkube-public       Active   11d\nkube-system       Active   11d\nmetallb-system    Active   11d\nnextcloud         Active   1m\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14 Nextcloud Helm Charts \u0e08\u0e32\u0e01\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c ",Object(r.b)("a",{parentName:"li",href:"https://github.com/nextcloud/helm.git"},"https://github.com/nextcloud/helm.git"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/nextcloud/helm.git\n")),Object(r.b)("ol",{start:4},Object(r.b)("li",{parentName:"ol"},"\u0e41\u0e01\u0e49\u0e44\u0e02\u0e44\u0e1f\u0e25\u0e4c ",Object(r.b)("mark",null,"./helm/charts/nextcloud/values.yaml")," \u0e43\u0e19\u0e17\u0e35\u0e48\u0e19\u0e35\u0e49\u0e2a\u0e21\u0e21\u0e38\u0e15\u0e34\u0e27\u0e48\u0e32\u0e40\u0e23\u0e32\u0e08\u0e30\u0e43\u0e0a\u0e49 Prefix \u0e0a\u0e37\u0e48\u0e2d ",Object(r.b)("mark",null,"nextcloud")," \u0e41\u0e25\u0e30 Domain name \u0e0a\u0e37\u0e48\u0e2d ",Object(r.b)("mark",null,"mydomain.com"))),Object(r.b)("p",null,"4.1 \u0e2a\u0e48\u0e27\u0e19\u0e02\u0e2d\u0e07 image \u0e43\u0e2b\u0e49\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e40\u0e27\u0e2d\u0e23\u0e4c\u0e0a\u0e31\u0e48\u0e19\u0e02\u0e2d\u0e07 image \u0e17\u0e35\u0e48\u0e40\u0e23\u0e32\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"image:\n  repository: nextcloud\n  tag: 20.0.8-apache\n  pullPolicy: IfNotPresent\n")),Object(r.b)("p",null,"4.2 \u0e01\u0e33\u0e2b\u0e19\u0e14\u0e08\u0e33\u0e19\u0e27\u0e19 replica \u0e17\u0e35\u0e48\u0e08\u0e30\u0e23\u0e31\u0e19\u0e43\u0e2b\u0e49\u0e40\u0e1b\u0e47\u0e19 1"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"# Number of replicas to be deployed\nreplicaCount: 1\n")),Object(r.b)("p",null,"4.3 \u0e01\u0e33\u0e2b\u0e19\u0e14 Nextcoud Hostname, Admin user, Admin password"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"nextcloud:\n  host: nextcloud.mydomain.com\n  username: admin\n  password: password\n")),Object(r.b)("p",null,"4.4 \u0e2a\u0e48\u0e27\u0e19\u0e17\u0e35\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e01\u0e32\u0e23\u0e2a\u0e48\u0e07\u0e40\u0e21\u0e25\u0e4c\u0e41\u0e08\u0e49\u0e07\u0e40\u0e15\u0e37\u0e2d\u0e19\u0e1c\u0e39\u0e49\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'mail:\n    enabled: true\n    fromAddress: admin\n    domain: nextcloud.mydomain.com\n    smtp:\n      host: mail.mydomain.com\n      secure: ""\n      port: 25\n      authtype: "none"\n      name: ""\n      password: ""\n')),Object(r.b)("p",null,"4.5 \u0e41\u0e01\u0e49\u0e44\u0e02\u0e04\u0e48\u0e32 PHP Configuration \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e0a\u0e49 Redis session \u0e42\u0e14\u0e22 Hostname \u0e02\u0e2d\u0e07 Redis server \u0e08\u0e30\u0e40\u0e1b\u0e47\u0e19\u0e0a\u0e37\u0e48\u0e2d ",Object(r.b)("mark",null,"prefix-"),"redis-master \u0e41\u0e25\u0e30\u0e40\u0e23\u0e32\u0e08\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e23\u0e30\u0e1a\u0e38 Password \u0e17\u0e35\u0e48\u0e43\u0e0a\u0e49\u0e43\u0e19\u0e01\u0e32\u0e23\u0e04\u0e38\u0e22\u0e14\u0e49\u0e27\u0e22"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},' phpConfigs:\n  redis-session.ini: |-\n      session.save_handler = redis\n      session.save_path = "tcp://nextcloud-redis-master:6379?auth=pasdword"\n      redis.session.locking_enabled = 1\n      redis.session.lock_retries = 4000\n')),Object(r.b)("p",null,"4.6 \u0e43\u0e2b\u0e49\u0e23\u0e30\u0e1a\u0e38 Redis Default Configuration \u0e40\u0e1b\u0e47\u0e19 false \u0e41\u0e25\u0e30 SMTP Default Configuration \u0e40\u0e1b\u0e47\u0e19 true"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"}," defaultConfigs:\n    # Redis default configuration\n    redis.config.php: false\n    # SMTP default configuration\n    smtp.config.php: true\n")),Object(r.b)("p",null,"4.7 \u0e01\u0e33\u0e2b\u0e19\u0e14 Custom Configuration \u0e02\u0e2d\u0e07 Nextcloud \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e43\u0e0a\u0e49 Object Storage \u0e41\u0e25\u0e30 Redis Session"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"}," configs:\n    s3.config.php: |-\n        <?php\n        $CONFIG = array (\n          'objectstore' => array(\n            'class' => '\\\\OC\\\\Files\\\\ObjectStore\\\\S3',\n            'arguments' => array(\n              'bucket'     => 'my-bucket',\n              'autocreate' => true,\n              'key'        => 'my-key',\n              'secret'     => 'my-secret',\n              'port'       => 9000,\n              'hostname'   => 'my-s3-storage.mydomain.com',\n              'use_ssl'    => false,\n              'use_path_style' => true\n            )\n          )\n        );\n    redis.config.php: |-\n        <?php\n        $CONFIG = array (\n                'memcache.distributed' => '\\\\OC\\\\Memcache\\\\Redis',\n                'memcache.locking' => '\\\\OC\\\\Memcache\\\\Redis',\n                'redis' => array (\n                        'host' => 'nextcloud-redis-master',\n                        'port' => '6379',\n                        'password' => 'password',\n                ),\n\n        );\n    custom.config.php: |-\n        <?php\n        $CONFIG = array (\n        'overwriteprotocol' => 'https',\n        );\n")),Object(r.b)("p",null,"4.8 \u0e43\u0e2b\u0e49\u0e1b\u0e34\u0e14\u0e01\u0e32\u0e23\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19 Internal Database"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"internalDatabase:\n  enabled: false\n")),Object(r.b)("p",null,"4.9 \u0e01\u0e33\u0e2b\u0e19\u0e14\u0e04\u0e48\u0e32\u0e02\u0e2d\u0e07 External Database"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"externalDatabase:\n  enabled: true\n\n  ## Supported database engines: mysql or postgresql\n  type: mysql\n\n  ## Database host\n  host: my-db.mydomain.com\n\n  ## Database user\n  user: nextcloud\n\n  ## Database password\n  password: password\n\n  ## Database name\n  database: nextcloud\n")),Object(r.b)("p",null,"4.10 \u0e01\u0e33\u0e2b\u0e19\u0e14\u0e04\u0e48\u0e32 Redis Server"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"redis:\n  enabled: true\n  usePassword: true\n  password: 'password'\n")),Object(r.b)("p",null,"4.11 \u0e01\u0e33\u0e2b\u0e19\u0e14\u0e04\u0e48\u0e32 Virtual IP Address \u0e43\u0e2b\u0e49 Load Balancer \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e43\u0e2b\u0e49\u0e02\u0e49\u0e32\u0e07\u0e19\u0e2d\u0e01\u0e21\u0e2d\u0e07\u0e40\u0e2b\u0e47\u0e19 \u0e0b\u0e36\u0e48\u0e07\u0e08\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e43\u0e0a\u0e49\u0e0a\u0e48\u0e27\u0e07 IP Address \u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e08\u0e2d\u0e07\u0e40\u0e2d\u0e32\u0e44\u0e27\u0e49"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"service:\n  type: LoadBalancer\n  port: 8080\n  loadBalancerIP: 192.168.1.250\n  nodePort: nil\n")),Object(r.b)("p",null,"4.12 \u0e01\u0e33\u0e2b\u0e19\u0e14\u0e04\u0e48\u0e32 Persistece \u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e40\u0e01\u0e47\u0e1a Nextcloud Data \u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49 storageClass \u0e40\u0e1b\u0e47\u0e19 ",Object(r.b)("mark",null,"nfs-client")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},'persistence:\n  # Nextcloud Data (/var/www/html)\n  enabled: true\n  storageClass: "nfs-client"\n  accessMode: ReadWriteMany\n  size: 8Gi\n')),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\u0e08\u0e30\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e35\u0e01\u0e32\u0e23\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07 Kubernetes NFS Subdir External Provisioner (",Object(r.b)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner"},"https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner"),")"))),Object(r.b)("p",null,"4.13 \u0e01\u0e33\u0e2b\u0e19\u0e14 Resources Limits \u0e43\u0e2b\u0e49\u0e01\u0e31\u0e1a Pod"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"resources:\n limits:\n    cpu: 500m\n    memory: 512Mi\n  requests:\n    cpu: 500m\n    memory: 512Mi\n")),Object(r.b)("p",null,"4.14 \u0e17\u0e33\u0e01\u0e32\u0e23 Disable Liveness Probe \u0e40\u0e19\u0e37\u0e48\u0e2d\u0e07\u0e08\u0e32\u0e01\u0e02\u0e13\u0e30\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07 Nextcloud Pod \u0e08\u0e30\u0e43\u0e0a\u0e49\u0e40\u0e27\u0e25\u0e32\u0e19\u0e32\u0e19\u0e17\u0e33\u0e43\u0e2b\u0e49\u0e40\u0e01\u0e34\u0e14 Timeout \u0e2b\u0e32\u0e01\u0e21\u0e35\u0e01\u0e32\u0e23 Enable \u0e40\u0e2d\u0e32\u0e44\u0e27\u0e49"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"livenessProbe:\n  enabled: false\n  initialDelaySeconds: 10\n  periodSeconds: 10\n  timeoutSeconds: 5\n  failureThreshold: 3\n  successThreshold: 1\n")),Object(r.b)("p",null,"\u0e385. \u0e17\u0e33\u0e01\u0e32\u0e23 Deploy Helm Charts"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"cd ./helm/charts\nhelm install nextcloud ./nextcloud -n nextcloud\n")),Object(r.b)("p",null,"\u0e15\u0e31\u0e27\u0e2d\u0e22\u0e48\u0e32\u0e07 Output"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"NAME                                         READY   STATUS      RESTARTS   AGE\nnextcloud-nextcloud-6f4bc5fcdc-xdrpw        1/1     Running     0          11h\n")),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"\u0e14\u0e39\u0e2a\u0e16\u0e32\u0e19\u0e30 Pod \u0e17\u0e35\u0e48\u0e16\u0e39\u0e01 Deploy")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods -n nextcloud\n")),Object(r.b)("p",null,"\u0e16\u0e49\u0e32\u0e2d\u0e22\u0e32\u0e01\u0e23\u0e35\u0e42\u0e21\u0e15\u0e40\u0e02\u0e49\u0e32\u0e44\u0e1b\u0e14\u0e39\u0e02\u0e49\u0e32\u0e07\u0e43\u0e19 Pod \u0e17\u0e35\u0e48\u0e16\u0e39\u0e01 Deploy \u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e23\u0e35\u0e42\u0e21\u0e15\u0e40\u0e02\u0e49\u0e32\u0e44\u0e1b\u0e44\u0e14\u0e49\u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49\u0e04\u0e33\u0e2a\u0e31\u0e48\u0e07 kubectl exec -it -n ",Object(r.b)("mark",null,"$namespace $podname")," -- /bin/bash"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"kubectl exec -it -n nextcloud nextcloud-nextcloud-6f4bc5fcdc-xdrpw -- /bin/bash\n")),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"\u0e15\u0e34\u0e14\u0e15\u0e31\u0e49\u0e07 Certbot \u0e42\u0e14\u0e22\u0e14\u0e39\u0e08\u0e32\u0e01 ",Object(r.b)("a",{parentName:"p",href:"https://worawats.github.io/manuals/docs/"},"https://worawats.github.io/manuals/docs/"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"\u0e17\u0e14\u0e2a\u0e2d\u0e1a\u0e40\u0e02\u0e49\u0e32\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c\u0e17\u0e35\u0e48\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e02\u0e36\u0e49\u0e19 ",Object(r.b)("a",{parentName:"p",href:"https://nextcloud.mydomain.com"},"https://nextcloud.mydomain.com")))),Object(r.b)("h3",{id:"\u0e1b\u0e23\u0e31\u0e1a\u0e41\u0e15\u0e48\u0e07-nextcloud-\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e17\u0e33-pod-autoscaling"},"\u0e1b\u0e23\u0e31\u0e1a\u0e41\u0e15\u0e48\u0e07 Nextcloud \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e23\u0e2d\u0e07\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e17\u0e33 Pod Autoscaling"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Enable Cronjob")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"cronjob:\n  enabled: true\n  resources:\n   limits:\n      cpu: 100m\n      memory: 128Mi\n    requests:\n      cpu: 100m\n      memory: 128Mi\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Enable Pod Autoscaling \u0e42\u0e14\u0e22\u0e43\u0e0a\u0e49 HorizontalPodAutoscaler \u0e0b\u0e36\u0e48\u0e07\u0e21\u0e35\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02\u0e14\u0e31\u0e07\u0e15\u0e48\u0e2d\u0e44\u0e1b\u0e19\u0e35\u0e49")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u0e08\u0e33\u0e19\u0e27\u0e19 Pod \u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19 2"),Object(r.b)("li",{parentName:"ul"},"\u0e08\u0e33\u0e19\u0e27\u0e19 Pod \u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14 10 "),Object(r.b)("li",{parentName:"ul"},"\u0e17\u0e33\u0e01\u0e32\u0e23\u0e02\u0e22\u0e32\u0e22\u0e40\u0e21\u0e37\u0e48\u0e2d CPU \u0e40\u0e01\u0e34\u0e19 60%")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"hpa:\n  enabled: true\n  cputhreshold: 60\n  minPods: 2\n  maxPods: 10\n")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"\u0e2a\u0e31\u0e48\u0e07\u0e2d\u0e31\u0e1e\u0e40\u0e01\u0e23\u0e14 Helm Charts")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"helm upgrade nextcloud ./nextcloud -n nextcloud\n")))}i.isMDXComponent=!0}}]);